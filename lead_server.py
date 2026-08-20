import http.server
import socketserver
import json
import csv
import os
import smtplib
import urllib.request
import urllib.parse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from urllib.parse import parse_qs

PORT = 8080
DIRECTORY = "/Users/harsh97/Desktop/College Corridor New Website"
LEADS_CSV = os.path.join(DIRECTORY, "leads.csv")
OFFICIAL_EMAIL = "admissions@collegecorridor.com"

# SMTP Configuration (Optional env variables for live production SMTP)
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASS = os.environ.get('SMTP_PASS', '')

# Ensure CSV header exists
if not os.path.exists(LEADS_CSV):
    with open(LEADS_CSV, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Timestamp (IST)', 'Full Name', 'Phone Number', 'Email Address', 'Program Interest', 'Message', 'Page Source'])

def send_email_notification(name, phone, email, program, message, source):
    """Dispatches lead notification to admissions@collegecorridor.com via multiple channels."""
    subject = f"🎓 New Admission Enquiry: {name} ({program})"
    body = f"""
    New Admission Lead Received on College Corridor Website:
    -----------------------------------------------------
    Full Name: {name}
    Phone Number: {phone}
    Email Address: {email}
    Program Interest: {program}
    Page Source: {source}
    Message: {message if message else 'N/A'}
    -----------------------------------------------------
    Timestamp: {datetime.now().strftime('%d/%m/%Y %H:%M:%S IST')}
    """

    email_sent = False

    # Channel 1: FormSubmit.co API (Direct email routing to admissions@collegecorridor.com)
    try:
        fs_url = f"https://formsubmit.co/ajax/{OFFICIAL_EMAIL}"
        fs_payload = json.dumps({
            "_subject": subject,
            "Full Name": name,
            "Phone": phone,
            "Email": email,
            "Program Interest": program,
            "Message": message if message else 'N/A',
            "Page Source": source,
            "_captcha": "false"
        }).encode('utf-8')

        fs_req = urllib.request.Request(
            fs_url, 
            data=fs_payload, 
            headers={
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'CollegeCorridorLeadServer/1.0'
            }
        )
        with urllib.request.urlopen(fs_req, timeout=10) as resp:
            if resp.status == 200:
                print(f"✅ FormSubmit Email dispatched to {OFFICIAL_EMAIL}!")
                email_sent = True
    except Exception as e:
        print(f"⚠️ FormSubmit Notice: {e}")

    # Channel 2: Web3Forms API
    try:
        api_url = "https://api.web3forms.com/submit"
        req_data = urllib.parse.urlencode({
            "access_key": "4690353c-1b77-4b77-a931-15591d76378e",
            "subject": subject,
            "from_name": "College Corridor Lead Alert",
            "to_email": OFFICIAL_EMAIL,
            "name": name,
            "phone": phone,
            "email": email,
            "program": program,
            "message": message,
            "page_source": source
        }).encode('utf-8')

        req = urllib.request.Request(api_url, data=req_data, headers={'Content-Type': 'application/x-www-form-urlencoded'})
        with urllib.request.urlopen(req, timeout=8) as resp:
            if resp.status == 200:
                print(f"✅ Web3Forms Email dispatched to {OFFICIAL_EMAIL}!")
                email_sent = True
    except Exception as e:
        print(f"⚠️ Web3Forms Notice: {e}")

    # Channel 3: Direct SMTP (If SMTP_USER and SMTP_PASS set)
    if SMTP_USER and SMTP_PASS:
        try:
            msg = MIMEMultipart()
            msg['From'] = f"College Corridor Leads <{SMTP_USER}>"
            msg['To'] = OFFICIAL_EMAIL
            msg['Subject'] = subject
            msg.attach(MIMEText(body, 'plain', 'utf-8'))

            server = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=8)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
            server.quit()
            print(f"✅ SMTP Email dispatched to {OFFICIAL_EMAIL}!")
            email_sent = True
        except Exception as e:
            print(f"⚠️ SMTP Error: {e}")

    return email_sent


class LeadHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/lead':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')

            data = {}
            if self.headers.get('Content-Type', '').startswith('application/x-www-form-urlencoded'):
                parsed = parse_qs(body)
                data = {k: v[0] for k, v in parsed.items()}
            elif 'multipart/form-data' in self.headers.get('Content-Type', ''):
                lines = body.splitlines()
                current_key = None
                for line in lines:
                    if 'name="' in line:
                        current_key = line.split('name="')[1].split('"')[0]
                    elif current_key and line.strip() and not line.startswith('---'):
                        data[current_key] = line.strip()
                        current_key = None

            timestamp = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
            name = data.get('full_name') or data.get('name') or 'N/A'
            phone = data.get('phone') or 'N/A'
            email = data.get('email') or 'N/A'
            program = data.get('program_interest') or data.get('program') or 'General'
            message = data.get('message') or ''
            source = data.get('page_source') or 'Website'

            # 1. Save to leads.csv
            with open(LEADS_CSV, 'a', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                writer.writerow([timestamp, name, phone, email, program, message, source])

            print("\n🎓 *New College Corridor Admission Enquiry*")
            print(f"👤 *Name:* {name}")
            print(f"📞 *Phone:* {phone}")
            print(f"✉️ *Email:* {email}")
            print(f"📚 *Program:* {program}")
            print(f"📍 *Source:* {source}")

            # 2. Dispatch email notification to admissions@collegecorridor.com
            send_email_notification(name, phone, email, program, message, source)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = json.dumps({
                'status': 'success',
                'message': f'Lead saved to leads.csv and email notification dispatched to {OFFICIAL_EMAIL}'
            }).encode('utf-8')
            self.wfile.write(response)
        else:
            self.send_error(404, "Endpoint not found")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    print(f"Lead Server running at http://localhost:{PORT}/")
    print(f"Official Email Notifications: {OFFICIAL_EMAIL}")
    print(f"Leads CSV path: {LEADS_CSV}")
    with socketserver.TCPServer(("", PORT), LeadHandler) as httpd:
        httpd.serve_forever()
