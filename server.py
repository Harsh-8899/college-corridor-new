"""
College Corridor — Clean URL Local Development Server
Automatically maps clean routes (e.g. /medical-admissions) to physical HTML files (/medical-admissions.html).
Run using: python3 server.py [port]
"""
import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8085

class CleanURLHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Extract path without query parameters or hash fragments
        clean_url_path = path.split('?')[0].split('#')[0]
        translated = super().translate_path(clean_url_path)
        
        # If requested path does not exist as file/directory, but path.html exists, return path.html
        if not os.path.exists(translated) and os.path.exists(translated + '.html'):
            return translated + '.html'
        return translated

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), CleanURLHTTPRequestHandler) as httpd:
        print(f"🚀 Serving College Corridor Clean URLs on http://localhost:{PORT}")
        print(f"📁 Clean URLs active: e.g. http://localhost:{PORT}/medical-admissions")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
