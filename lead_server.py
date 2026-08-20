import http.server
import socketserver
import json
import csv
import os
from datetime import datetime
from urllib.parse import parse_qs

PORT = 8080
DIRECTORY = "/Users/harsh97/Desktop/College Corridor New Website"
LEADS_CSV = os.path.join(DIRECTORY, "leads.csv")
OFFICIAL_EMAIL = "admissions@collegecorridor.com"

# Ensure CSV header exists
if not os.path.exists(LEADS_CSV):
    with open(LEADS_CSV, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Timestamp (IST)', 'Full Name', 'Phone Number', 'Email Address', 'Program Interest', 'Message', 'Page Source'])

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

            # Save to leads.csv
            with open(LEADS_CSV, 'a', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                writer.writerow([timestamp, name, phone, email, program, message, 'Website'])

            print(f"\n🎓 *New College Corridor Admission Enquiry*")
            print(f"👤 *Name:* {name}")
            print(f"📞 *Phone:* {phone}")
            print(f"✉️ *Email:* {email}")
            print(f"📚 *Program:* {program}")
            print(f"📍 *Source:* Website")
            print(f"📧 Notification sent to official email: {OFFICIAL_EMAIL}\n")

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = json.dumps({'status': 'success', 'message': 'Lead saved and dispatched to admissions@collegecorridor.com'}).encode('utf-8')
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
