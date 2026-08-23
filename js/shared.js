(function() {
  function getPathPrefix() {
    return (window.location.pathname.includes('/locations/')) ? '../' : '';
  }

  function getAnnouncement() {
    const p = getPathPrefix();
    return `<div class="announcement-bar" role="banner" style="background:#0F172A;color:#FFFFFF;padding:6px 20px;font-size:0.75rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <span>📍 Greater Noida, UP</span>
        <a href="tel:+918194083803" style="color:#FFFFFF;text-decoration:none;font-weight:600;display:flex;align-items:center;gap:4px;">📞 +91 8194 083 803</a>
        <a href="mailto:admissions@collegecorridor.com" style="color:rgba(248,250,252,0.8);text-decoration:none;display:flex;align-items:center;gap:4px;">✉️ admissions@collegecorridor.com</a>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <a href="tel:+918194083803" style="color:#6EE7B7;font-weight:700;text-decoration:none;">[CALL ADVISOR]</a>
        <a href="https://wa.me/918194083803?text=Hello%20College%20Corridor%20Advisory%2C%20I%20need%20guidance" target="_blank" style="color:#34D399;font-weight:700;text-decoration:none;">[WHATSAPP]</a>
        <a href="javascript:void(0)" data-modal="lead" data-program="Top Bar Consultation" style="color:#93C5FD;font-weight:700;text-decoration:none;">[BOOK CONSULTATION]</a>
      </div>
    </div>`;
  }

  function getNavbar(activePage) {
    const p = getPathPrefix();
    return `<nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="${p}index.html" class="nav-logo" aria-label="College Corridor Advisory Home">
        <img src="${p}assets/images/logo-icon.png" alt="College Corridor" class="nav-logo-icon-img">
        <div class="nav-logo-text">
          <span class="logo-main">COLLEGE CORRIDOR</span>
          <span class="logo-sub">Advisory</span>
        </div>
      </a>
      <div class="nav-links" role="menubar">
        <a href="${p}medical-admissions.html" class="nav-link ${activePage==='medical'?'active':''}">Medical</a>
        <a href="${p}engineering-admissions.html" class="nav-link ${activePage==='engineering'?'active':''}">Engineering</a>
        <a href="${p}management-admissions.html" class="nav-link ${activePage==='management'?'active':''}">Management</a>
        <a href="${p}law-admissions.html" class="nav-link ${activePage==='law'?'active':''}">Law</a>
        <a href="${p}counselling.html" class="nav-link ${activePage==='counselling'?'active':''}">Counselling</a>
        <a href="${p}about.html" class="nav-link ${activePage==='about'?'active':''}">About</a>
      </div>
      <div class="nav-cta">
        <button class="btn btn-primary btn-sm" data-modal="lead" data-program="Talk to Advisor Header" style="background:var(--blue);border-color:var(--blue);color:#fff;letter-spacing:0.03em;">Talk to an Advisor</button>
      </div>
      <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="mobile-nav" id="mobile-nav-drawer" role="dialog" aria-label="Mobile navigation" aria-modal="true">
    <div class="mobile-nav-header" style="position:sticky;top:0;z-index:10000;background:#0B1220;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;margin:-1rem -1rem 1rem -1rem;border-bottom:1px solid rgba(255,255,255,0.1);">
      <span style="font-weight:700;font-size:0.9375rem;color:#FFFFFF;letter-spacing:0.05em;">
        COLLEGE CORRIDOR
      </span>
      <button class="mobile-nav-close-btn" aria-label="Close menu" style="background:transparent;padding:6px 12px;border-radius:4px;color:rgba(255,255,255,0.6);font-weight:500;font-size:0.8125rem;border:1px solid rgba(255,255,255,0.2);cursor:pointer;">
        Close
      </button>
    </div>
    <a href="${p}medical-admissions.html" class="mobile-nav-link">Medical Admissions</a>
    <a href="${p}engineering-admissions.html" class="mobile-nav-link">Engineering Admissions</a>
    <a href="${p}management-admissions.html" class="mobile-nav-link">Management & MBA</a>
    <a href="${p}law-admissions.html" class="mobile-nav-link">Law Admissions</a>
    <a href="${p}pharmacy-nursing.html" class="mobile-nav-link">Pharmacy & Nursing</a>
    <a href="${p}nri-admissions.html" class="mobile-nav-link">NRI Admissions</a>
    <a href="${p}study-abroad.html" class="mobile-nav-link">Study Abroad</a>
    <a href="${p}counselling.html" class="mobile-nav-link">Counselling</a>
    <a href="${p}find-colleges.html" class="mobile-nav-link">Find Colleges</a>
    <a href="${p}about.html" class="mobile-nav-link">About Us</a>
    <div style="margin-top:2rem;">
      <button class="btn btn-primary" style="width:100%;background:var(--blue);border-color:var(--blue);color:#fff;" data-modal="lead" data-program="Talk to Advisor Mobile Drawer">Talk to an Advisor</button>
    </div>
  </div>`;
  }

  function getFooter() {
    const p = getPathPrefix();
    return `<footer class="footer" role="contentinfo">
    <div class="container">
      <div style="display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3.5rem;">
        <div>
          <a href="${p}index.html" style="display:inline-block;text-decoration:none;">
            <img src="${p}assets/images/logo-light.png" alt="College Corridor Logo" style="height:72px;width:auto;margin-bottom:1rem;display:block;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));">
          </a>
          <div style="font-family:var(--font-sans);font-weight:800;font-size:1.125rem;color:#FFFFFF;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:0.25rem;">COLLEGE CORRIDOR</div>
          <div style="font-size:0.6875rem;color:var(--gold);letter-spacing:0.14em;text-transform:uppercase;font-weight:700;margin-bottom:1rem;">Advisory</div>
          <p style="font-size:0.8125rem;line-height:1.75;color:rgba(248,250,252,0.7);margin-bottom:1.25rem;max-width:280px;font-weight:500;">Strategic admissions guidance for students and families choosing India's leading institutions.</p>
          <div style="font-size:0.6875rem;color:#5EEAD4;letter-spacing:0.08em;text-transform:uppercase;font-weight:800;">Independent. Transparent. Informed.</div>
        </div>
        <div>
          <div style="font-size:0.625rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:rgba(248,250,252,0.45);margin-bottom:1.25rem;">Advisory</div>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.625rem;">
            <li><a href="${p}medical-admissions.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;transition:color 0.2s ease;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Medical Admissions</a></li>
            <li><a href="${p}engineering-admissions.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;transition:color 0.2s ease;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Engineering Admissions</a></li>
            <li><a href="${p}management-admissions.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Management & MBA</a></li>
            <li><a href="${p}law-admissions.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Law Admissions</a></li>
            <li><a href="${p}nri-admissions.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">NRI Admissions</a></li>
            <li><a href="${p}study-abroad.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Study Abroad</a></li>
          </ul>
        </div>
        <div>
          <div style="font-size:0.625rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:rgba(248,250,252,0.45);margin-bottom:1.25rem;">Resources</div>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.625rem;">
            <li><a href="${p}counselling.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Counselling Hub</a></li>
            <li><a href="${p}find-colleges.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Find Colleges</a></li>
            <li><a href="${p}compare-colleges.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Compare Colleges</a></li>
            <li><a href="${p}entrance-exams.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">Entrance Exams</a></li>
            <li><a href="${p}about.html" style="font-size:0.8125rem;color:rgba(248,250,252,0.7);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,1)'" onmouseout="this.style.color='rgba(248,250,252,0.7)'">About Us</a></li>
          </ul>
        </div>
        <!-- EXECUTIVE PROFESSIONAL CONTACT COLUMN -->
        <div>
          <div style="font-size:0.6875rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);margin-bottom:1.25rem;">
            DIRECT ADVISORY CONTACT
          </div>
          
          <div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem;">
            <!-- PHONE -->
            <a href="tel:+918194083803" style="font-size:0.9375rem;font-weight:800;color:#FFFFFF;text-decoration:none;display:flex;align-items:center;gap:10px;transition:color 0.2s ease;" onmouseover="this.style.color='var(--blue-sec)'" onmouseout="this.style.color='#FFFFFF'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 8194 083 803</span>
            </a>

            <!-- EMAIL -->
            <a href="mailto:admissions@collegecorridor.com" style="font-size:0.8125rem;font-weight:700;color:rgba(248,250,252,0.85);text-decoration:none;display:flex;align-items:center;gap:10px;word-break:break-all;transition:color 0.2s ease;" onmouseover="this.style.color='#5EEAD4'" onmouseout="this.style.color='rgba(248,250,252,0.85)'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>admissions@collegecorridor.com</span>
            </a>

            <!-- LOCATION -->
            <div style="font-size:0.8125rem;color:rgba(248,250,252,0.65);line-height:1.6;margin:0;font-weight:500;display:flex;align-items:flex-start;gap:10px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>A-114, Vision Business Park,<br>Knowledge Park III, Greater Noida — 201306</span>
            </div>
          </div>

          <!-- ACTION BUTTONS -->
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <a href="tel:+918194083803" class="btn btn-primary btn-sm" style="background:var(--blue);border-color:var(--blue);color:#fff;font-weight:800;padding:8px 14px;border-radius:6px;font-size:0.75rem;display:inline-flex;align-items:center;gap:6px;">
              📞 Call Now
            </a>
            <a href="https://wa.me/918194083803?text=Hello%20College%20Corridor%20Advisory" target="_blank" class="btn btn-primary btn-sm" style="background:#10B981;border-color:#10B981;color:#fff;font-weight:800;padding:8px 14px;border-radius:6px;font-size:0.75rem;display:inline-flex;align-items:center;gap:6px;">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
        <div style="font-size:0.75rem;color:rgba(248,250,252,0.35);">© ${new Date().getFullYear()} College Corridor Advisory. Independent Admissions Consultancy.</div>
        <div style="display:flex;gap:1.5rem;">
          <a href="${p}privacy-policy.html" style="font-size:0.75rem;color:rgba(248,250,252,0.35);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,0.7)'" onmouseout="this.style.color='rgba(248,250,252,0.35)'">Privacy Policy</a>
          <a href="${p}terms-of-use.html" style="font-size:0.75rem;color:rgba(248,250,252,0.35);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,0.7)'" onmouseout="this.style.color='rgba(248,250,252,0.35)'">Terms of Use</a>
          <a href="${p}contact.html" style="font-size:0.75rem;color:rgba(248,250,252,0.35);text-decoration:none;" onmouseover="this.style.color='rgba(248,250,252,0.7)'" onmouseout="this.style.color='rgba(248,250,252,0.35)'">Contact</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- MOBILE STICKY BOTTOM BAR -->
  <div class="mobile-sticky-bar" style="position:fixed;bottom:0;left:0;right:0;z-index:999;background:#0B1220;border-top:1px solid rgba(255,255,255,0.1);padding:10px 16px;display:none;">
    <button class="btn btn-primary btn-sm" style="width:100%;background:var(--blue);border-color:var(--blue);color:#fff;font-size:0.8125rem;font-weight:600;padding:13px 16px;" data-modal="lead" data-program="Mobile Sticky Book Counselling">Speak With an Advisor</button>
  </div>

  <!-- DESKTOP FLOATING STICKY BUTTON -->
  <div class="desktop-floating-cta" style="position:fixed;bottom:24px;right:24px;z-index:999;display:none;">
    <button class="btn btn-primary" data-modal="lead" data-program="Desktop Floating CTA" style="background:var(--blue);border-color:var(--blue);color:#fff;box-shadow:0 8px 25px rgba(37,99,235,0.35);padding:13px 24px;border-radius:6px;font-weight:600;font-size:0.875rem;">Speak With an Advisor</button>
  </div>

  <!-- WHATSAPP FLOAT -->
  <a href="https://wa.me/918194083803?text=Hi%20College%20Corridor%20Advisory%2C%20I%20would%20like%20to%20know%20more%20about%20counselling%20guidance." target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" style="position:fixed;bottom:24px;left:24px;z-index:999;background:#25D366;color:#FFFFFF;display:flex;align-items:center;gap:8px;padding:11px 18px;border-radius:50px;font-weight:600;font-size:0.8125rem;box-shadow:0 4px 20px rgba(37,211,102,0.4);text-decoration:none;transition:all 0.3s ease;" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.195 4.393-1.084z"/></svg>
    <span>WhatsApp</span>
  </a>`;
  }

  function ensureLeadModal() {
    if (!document.getElementById('lead-modal')) {
      const modalHTML = `<div class="modal-overlay" id="lead-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal">
    <button class="modal-close" aria-label="Close form" id="modal-close-btn">✕</button>
    <div class="form-wrap">
      <div class="modal-header">
        <span class="section-label">Strategic Counselling Session</span>
        <h2 id="modal-title">Book Your Counselling Session</h2>
        <p>Speak to an admissions advisor and get profile-based counselling guidance.</p>
      </div>
      <form id="lead-form" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="full-name">Full Name <span aria-hidden="true">*</span></label>
            <input class="form-input" type="text" id="full-name" name="full_name" placeholder="Your full name" required aria-required="true" autocomplete="name">
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number <span aria-hidden="true">*</span></label>
            <input class="form-input" type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required aria-required="true" autocomplete="tel">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="email">Email Address <span aria-hidden="true">*</span></label>
          <input class="form-input" type="email" id="email" name="email" placeholder="your@email.com" required aria-required="true" autocomplete="email">
        </div>
        <div class="form-group">
          <label class="form-label" for="program-interest">Program / Interest <span aria-hidden="true">*</span></label>
          <select class="form-select" id="program-interest" name="program_interest" required aria-required="true">
            <option value="" disabled selected>Select a program</option>
            <option value="mbbs">Medical — MBBS / BDS</option>
            <option value="md-ms">Medical — NEET PG (MD/MS)</option>
            <option value="btech">Engineering — B.Tech / JEE</option>
            <option value="mba">Management — MBA / B-Schools</option>
            <option value="law">Law — BA LLB / LLM</option>
            <option value="pharmacy">Pharmacy / Nursing</option>
            <option value="study-abroad">Study Abroad</option>
            <option value="nri">NRI Quota Admissions</option>
            <option value="other">Other Counselling</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="message">Message (optional)</label>
          <textarea class="form-textarea" id="message" name="message" placeholder="Tell us your score/rank, preferred colleges, budget or counselling questions..."></textarea>
        </div>
        <div class="form-note" style="margin-bottom:var(--sp-5);">By submitting this form, you agree to be contacted by College Corridor Advisory.</div>
        <button type="submit" class="btn btn-primary" style="width:100%;font-size:var(--fs-base);padding:14px;background:#2563EB;" id="form-submit-btn" aria-label="Submit Counselling Session Request">
          Submit — Book Counselling Session
        </button>
      </form>
    </div>
    <div class="form-success" id="form-success-msg">
      <div class="success-icon">🎉</div>
      <h3>Enquiry Submitted Successfully!</h3>
      <p>Thank you! A College Corridor admissions advisor will contact you shortly on <strong>+91 8194083803</strong> or via email (<strong>admissions@collegecorridor.com</strong>) to discuss your strategy.</p>
    </div>
  </div>
</div>`;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
  }

  function injectStructuredData() {
    if (!document.getElementById('cc-json-ld')) {
      const schemaScript = document.createElement('script');
      schemaScript.id = 'cc-json-ld';
      schemaScript.type = 'application/ld+json';
      schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "EducationalOrganization",
            "@id": "https://collegecorridor.com/#organization",
            "name": "College Corridor Advisory",
            "url": "https://collegecorridor.com",
            "logo": "https://collegecorridor.com/assets/images/logo-icon.png",
            "telephone": "+918194083803",
            "email": "admissions@collegecorridor.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Greater Noida",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            }
          },
          {
            "@type": "WebSite",
            "@id": "https://collegecorridor.com/#website",
            "url": "https://collegecorridor.com",
            "name": "College Corridor Advisory",
            "publisher": { "@id": "https://collegecorridor.com/#organization" }
          }
        ]
      });
      document.head.appendChild(schemaScript);
    }

    if (!document.getElementById('cc-webmcp-script')) {
      const p = getPathPrefix();
      const mcpScript = document.createElement('script');
      mcpScript.id = 'cc-webmcp-script';
      mcpScript.src = `${p}js/webmcp.js`;
      mcpScript.async = true;
      document.head.appendChild(mcpScript);
    }
  }

  function injectSlots() {
    const annSlot = document.getElementById('announcement-bar-slot');
    if (annSlot) annSlot.innerHTML = getAnnouncement();

    const navSlot = document.getElementById('navbar-slot');
    if (navSlot) {
      const active = navSlot.dataset.active || '';
      navSlot.innerHTML = getNavbar(active);
    }

    const footSlot = document.getElementById('footer-slot');
    if (footSlot) footSlot.innerHTML = getFooter();

    ensureLeadModal();
    injectStructuredData();

    // Setup Mobile Hamburger Menu & Responsive Drawer Logic
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.getElementById('mobile-nav-drawer');
    const closeBtn = document.querySelector('.mobile-nav-close-btn');

    function toggleDrawer(open) {
      if (!hamburger || !drawer) return;
      const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      drawer.classList.toggle('open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    }

    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => toggleDrawer());
      if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleDrawer(false));
      }

      // Close mobile menu when clicking any nav link
      drawer.querySelectorAll('.mobile-nav-link, button').forEach(link => {
        link.addEventListener('click', () => toggleDrawer(false));
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          toggleDrawer(false);
        }
      });
    }

    // Toggle Sticky CTA displays based on viewport width
    function handleStickyDisplay() {
      const mobileBar = document.querySelector('.mobile-sticky-bar');
      const desktopCta = document.querySelector('.desktop-floating-cta');
      const waBtn = document.querySelector('.whatsapp-float-btn');
      if (window.innerWidth <= 768) {
        if (mobileBar) mobileBar.style.display = 'flex';
        if (desktopCta) desktopCta.style.display = 'none';
        if (waBtn) {
          waBtn.style.bottom = '70px';
          waBtn.style.left = '16px';
          waBtn.style.padding = '10px 16px';
          waBtn.style.fontSize = '12px';
        }
      } else {
        if (mobileBar) mobileBar.style.display = 'none';
        if (desktopCta) desktopCta.style.display = 'block';
        if (waBtn) {
          waBtn.style.bottom = '24px';
          waBtn.style.left = '24px';
          waBtn.style.padding = '12px 20px';
          waBtn.style.fontSize = '13px';
        }
      }
    }
    window.addEventListener('resize', handleStickyDisplay);
    handleStickyDisplay();
  }

  document.addEventListener('DOMContentLoaded', injectSlots);
})();