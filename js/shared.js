(function() {
  function getPathPrefix() {
    return (window.location.pathname.includes('/locations/')) ? '../' : '';
  }

  function getAnnouncement() {
    const p = getPathPrefix();
    return `<div class="announcement-bar" role="banner">
      🏆 College Corridor Advisory — <a href="javascript:void(0)" data-modal="lead" style="color:inherit;text-decoration:underline;font-weight:800;">Book Strategic Admission Counselling</a>
    </div>`;
  }

  function getNavbar(activePage) {
    const p = getPathPrefix();
    return `<nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="${p}index.html" class="nav-logo" aria-label="College Corridor Advisory Home">
        <img src="${p}assets/images/logo-icon.png" alt="College Corridor" class="nav-logo-icon-img">
        <div class="nav-logo-text">
          <span class="logo-main" style="font-weight:900;letter-spacing:-0.02em;">COLLEGE CORRIDOR</span>
          <span class="logo-sub" style="color:var(--clr-gold);font-weight:800;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;">Advisory</span>
        </div>
      </a>
      <div class="nav-links" role="menubar">
        <a href="${p}medical-admissions.html" class="nav-link ${activePage==='medical'?'active':''}">Medical</a>
        <a href="${p}engineering-admissions.html" class="nav-link ${activePage==='engineering'?'active':''}">Engineering</a>
        <a href="${p}management-admissions.html" class="nav-link ${activePage==='management'?'active':''}">MBA</a>
        <a href="${p}law-admissions.html" class="nav-link ${activePage==='law'?'active':''}">Law</a>
        <a href="${p}study-abroad.html" class="nav-link ${activePage==='abroad'?'active':''}">Study Abroad</a>
        <a href="${p}counselling.html" class="nav-link ${activePage==='counselling'?'active':''}">Counselling</a>
        <a href="${p}find-colleges.html" class="nav-link ${activePage==='find'?'active':''}">Find Colleges</a>
      </div>
      <div class="nav-cta">
        <button class="btn btn-primary btn-sm" data-modal="lead" data-program="Book Counselling Header" style="background:#2563EB;border-color:#2563EB;">BOOK COUNSELLING</button>
      </div>
      <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="mobile-nav" id="mobile-nav-drawer" role="dialog" aria-label="Mobile navigation" aria-modal="true">
    <div class="mobile-nav-header" style="position:sticky;top:0;z-index:10000;background:#0F172A;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;margin:-1rem -1rem 1rem -1rem;border-bottom:1px solid rgba(255,255,255,0.2);">
      <span style="font-weight:900;font-size:1.1rem;color:#FFFFFF;display:flex;align-items:center;gap:8px;">
        <img src="${p}assets/images/logo-icon.png" alt="College Corridor" style="height:26px;width:auto;"> COLLEGE CORRIDOR
      </span>
      <button class="mobile-nav-close-btn" aria-label="Close menu" style="background:#EF4444;padding:6px 14px;border-radius:20px;color:#FFFFFF;font-weight:800;border:none;cursor:pointer;">
        ✕ Close
      </button>
    </div>
    <a href="${p}medical-admissions.html" class="mobile-nav-link">🏥 Medical Admissions</a>
    <a href="${p}engineering-admissions.html" class="mobile-nav-link">⚙️ Engineering Admissions</a>
    <a href="${p}management-admissions.html" class="mobile-nav-link">📊 MBA & Management</a>
    <a href="${p}law-admissions.html" class="mobile-nav-link">⚖️ Law Admissions</a>
    <a href="${p}pharmacy-nursing.html" class="mobile-nav-link">💊 Pharmacy & Nursing</a>
    <a href="${p}nri-admissions.html" class="mobile-nav-link">🌐 NRI Admissions</a>
    <a href="${p}study-abroad.html" class="mobile-nav-link">✈️ Study Abroad</a>
    <a href="${p}counselling.html" class="mobile-nav-link">🎯 Counselling Hub</a>
    <a href="${p}find-colleges.html" class="mobile-nav-link">🔍 Find Colleges</a>
    <a href="${p}compare-colleges.html" class="mobile-nav-link">⚖️ Compare Colleges</a>
    <a href="${p}about.html" class="mobile-nav-link">ℹ️ About Us</a>
    <div style="margin-top:2rem;">
      <button class="btn btn-primary" style="width:100%;background:#2563EB;" data-modal="lead" data-program="Book Counselling Mobile Drawer">BOOK COUNSELLING</button>
    </div>
  </div>`;
  }

  function getFooter() {
    const p = getPathPrefix();
    return `<footer class="footer" role="contentinfo" style="background:#0F172A;color:#94A3B8;padding:var(--sp-12) 0 var(--sp-6) 0;border-top:1px solid rgba(255,255,255,0.1);">
    <div class="container">
      <div class="footer-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--sp-8);margin-bottom:var(--sp-8);">
        <div>
          <div class="footer-brand" style="color:#FFFFFF;font-weight:900;font-size:1.3rem;margin-bottom:12px;">COLLEGE CORRIDOR <span style="color:var(--clr-gold);font-size:12px;font-weight:800;display:block;">Advisory</span></div>
          <p style="font-size:13px;line-height:1.6;color:#94A3B8;margin-bottom:16px;">
            Premium admissions counselling for students targeting leading institutions across India and abroad. Strategic guidance for high-stakes admission decisions.
          </p>
          <div style="font-size:12px;color:#FCD34D;font-weight:800;">Strategic Admissions. Informed Decisions.</div>
        </div>
        <div>
          <h4 style="color:#FFFFFF;font-size:1rem;margin-bottom:12px;">Admissions Advisory</h4>
          <ul style="list-style:none;padding:0;margin:0;font-size:13px;display:flex;flex-direction:column;gap:8px;">
            <li><a href="${p}medical-admissions.html" style="color:#CBD5E1;text-decoration:none;">MBBS & BDS Counselling</a></li>
            <li><a href="${p}medical-admissions.html" style="color:#CBD5E1;text-decoration:none;">NEET PG (MD/MS)</a></li>
            <li><a href="${p}engineering-admissions.html" style="color:#CBD5E1;text-decoration:none;">B.Tech Admissions</a></li>
            <li><a href="${p}management-admissions.html" style="color:#CBD5E1;text-decoration:none;">MBA & B-Schools</a></li>
            <li><a href="${p}law-admissions.html" style="color:#CBD5E1;text-decoration:none;">Law School Admissions</a></li>
            <li><a href="${p}study-abroad.html" style="color:#CBD5E1;text-decoration:none;">Study Abroad Advisory</a></li>
          </ul>
        </div>
        <div>
          <h4 style="color:#FFFFFF;font-size:1rem;margin-bottom:12px;">Counselling Tools</h4>
          <ul style="list-style:none;padding:0;margin:0;font-size:13px;display:flex;flex-direction:column;gap:8px;">
            <li><a href="${p}counselling.html" style="color:#CBD5E1;text-decoration:none;">Counselling Strategy Hub</a></li>
            <li><a href="${p}find-colleges.html" style="color:#CBD5E1;text-decoration:none;">Find Colleges</a></li>
            <li><a href="${p}compare-colleges.html" style="color:#CBD5E1;text-decoration:none;">Compare Colleges</a></li>
            <li><a href="${p}nri-admissions.html" style="color:#CBD5E1;text-decoration:none;">NRI Admissions</a></li>
            <li><a href="${p}about.html" style="color:#CBD5E1;text-decoration:none;">About College Corridor</a></li>
          </ul>
        </div>
        <div>
          <h4 style="color:#FFFFFF;font-size:1rem;margin-bottom:12px;">Contact Advisory</h4>
          <p style="font-size:13px;color:#CBD5E1;margin-bottom:6px;">📍 Hubs: Delhi NCR | Bengaluru | Pune | Mumbai | Dehradun | Kolkata | Ahmedabad</p>
          <p style="font-size:13px;color:#CBD5E1;margin-bottom:6px;">📧 Advisory Desk: <a href="mailto:admissions@collegecorridor.com" style="color:#FCD34D;text-decoration:none;">admissions@collegecorridor.com</a></p>
          <p style="font-size:13px;color:#CBD5E1;margin-bottom:6px;">📞 Contact No: <a href="tel:+918194083803" style="color:#FCD34D;text-decoration:none;font-weight:800;">+91 8194083803</a></p>
          <p style="font-size:13px;color:#CBD5E1;margin-bottom:16px;">🏢 Office: A-114, Vision Business Park, Knowledge Park III, Greater Noida, Pincode - 201306</p>
          <button class="btn btn-primary btn-sm" data-modal="lead" data-program="Footer CTA" style="background:#2563EB;">BOOK COUNSELLING SESSION</button>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;font-size:12px;color:#64748B;">
        <div>© ${new Date().getFullYear()} College Corridor Advisory. All Rights Reserved. Independent Admission Consultancy.</div>
        <div>Transparent Guidance • No False Admission Guarantees</div>
      </div>
    </div>
  </footer>

  <!-- MOBILE STICKY BOTTOM BAR -->
  <div class="mobile-sticky-bar" style="position:fixed;bottom:0;left:0;right:0;z-index:999;background:#0F172A;border-top:1px solid rgba(255,255,255,0.15);padding:10px 16px;display:none;box-shadow:0 -4px 20px rgba(0,0,0,0.4);">
    <button class="btn btn-primary btn-sm" style="width:100%;background:#2563EB;border-color:#2563EB;font-size:13px;font-weight:900;padding:12px 16px;" data-modal="lead" data-program="Mobile Sticky Book Counselling">BOOK COUNSELLING NOW</button>
  </div>

  <!-- DESKTOP FLOATING STICKY BUTTON -->
  <div class="desktop-floating-cta" style="position:fixed;bottom:24px;right:24px;z-index:999;display:none;">
    <button class="btn btn-primary" data-modal="lead" data-program="Desktop Floating CTA" style="background:#2563EB;box-shadow:0 8px 25px rgba(37,99,235,0.4);padding:14px 24px;border-radius:50px;font-weight:900;">
      💬 BOOK COUNSELLING
    </button>
  </div>

  <!-- FLOATING WHATSAPP TOGGLE BUTTON -->
  <a href="https://wa.me/918194083803?text=Hi%20College%20Corridor%20Advisory%2C%20I%20would%20like%20to%20know%20more%20about%20counselling%20guidance." target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" style="position:fixed;bottom:24px;left:24px;z-index:999;background:#25D366;color:#FFFFFF;display:flex;align-items:center;gap:8px;padding:12px 20px;border-radius:50px;font-weight:900;font-size:13px;box-shadow:0 8px 25px rgba(37,211,102,0.45);text-decoration:none;transition:all 0.3s ease;" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.195 4.393-1.084z"/></svg>
    <span>Chat on WhatsApp</span>
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
            <label class="form-label" for="full-name">Full Name *</label>
            <input class="form-input" type="text" id="full-name" name="full_name" placeholder="Your full name" required autocomplete="name">
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number *</label>
            <input class="form-input" type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required autocomplete="tel">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="email">Email Address *</label>
          <input class="form-input" type="email" id="email" name="email" placeholder="your@email.com" required autocomplete="email">
        </div>
        <div class="form-group">
          <label class="form-label" for="program-interest">Program / Interest *</label>
          <select class="form-select" id="program-interest" name="program_interest" required>
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
        <button type="submit" class="btn btn-primary" style="width:100%;font-size:var(--fs-base);padding:14px;background:#2563EB;" id="form-submit-btn">
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

    // Setup Mobile Hamburger Menu & Responsive sticky display
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.getElementById('mobile-nav-drawer');
    const closeBtn = document.querySelector('.mobile-nav-close-btn');

    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        drawer.classList.toggle('open');
      });
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          hamburger.setAttribute('aria-expanded', 'false');
          drawer.classList.remove('open');
        });
      }
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