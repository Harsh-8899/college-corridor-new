(function() {
  function getPathPrefix() {
    return (window.location.pathname.includes('/locations/')) ? '../' : '';
  }

  function getAnnouncement() {
    const p = getPathPrefix();
    return `<div class="announcement-bar" role="banner">
      🏆 India's No.1 Education Consultancy — <a href="javascript:void(0)" data-modal="lead" style="color:inherit;text-decoration:underline;font-weight:700;">Book Expert Admission Counselling Today</a>
    </div>`;
  }

  function getNavbar(activePage) {
    const p = getPathPrefix();
    return `<nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="${p}index.html" class="nav-logo" aria-label="College Corridor Home">
        <img src="${p}assets/images/logo-icon.png" alt="College Corridor" class="nav-logo-icon-img">
        <div class="nav-logo-text">
          <span class="logo-main">College Corridor</span>
          <span class="logo-sub">Your Path. Our Purpose. ✨</span>
        </div>
      </a>
      <div class="nav-links" role="menubar">
        <div class="nav-dropdown" role="menuitem">
          <button class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
            Admissions
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="dropdown-menu" role="menu">
            <a href="${p}medical-admissions.html" class="dropdown-item" role="menuitem"><span class="di-icon">🏥</span><span><span class="di-label">Medical Admissions</span><span class="di-sub">MBBS, MD, MS — NEET guidance</span></span></a>
            <a href="${p}engineering-admissions.html" class="dropdown-item" role="menuitem"><span class="di-icon">⚙️</span><span><span class="di-label">Engineering Admissions</span><span class="di-sub">B.Tech — JEE, state & university</span></span></a>
            <a href="${p}management-admissions.html" class="dropdown-item" role="menuitem"><span class="di-icon">📊</span><span><span class="di-label">MBA & Management</span><span class="di-sub">MBA, PGDM, BBA admissions</span></span></a>
            <a href="${p}law-admissions.html" class="dropdown-item" role="menuitem"><span class="di-icon">⚖️</span><span><span class="di-label">Law Admissions</span><span class="di-sub">BA LLB, LLB — CLAT, AILET</span></span></a>
            <div class="dropdown-divider"></div>
            <a href="${p}pharmacy-nursing.html" class="dropdown-item" role="menuitem"><span class="di-icon">💊</span><span><span class="di-label">Pharmacy & Nursing</span><span class="di-sub">Allied health programs</span></span></a>
            <a href="${p}nri-admissions.html" class="dropdown-item" role="menuitem"><span class="di-icon">🌐</span><span><span class="di-label">NRI Admissions</span><span class="di-sub">NRI quota guidance</span></span></a>
          </div>
        </div>
        <div class="nav-dropdown" role="menuitem">
          <a href="${p}counselling.html" class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
            Counselling
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="dropdown-menu" role="menu">
            <a href="${p}counselling.html" class="dropdown-item" role="menuitem"><span class="di-icon">🎯</span><span><span class="di-label">Counselling Hub</span><span class="di-sub">All counselling services</span></span></a>
            <a href="${p}entrance-exams.html" class="dropdown-item" role="menuitem"><span class="di-icon">📝</span><span><span class="di-label">Entrance Exams</span><span class="di-sub">NEET, JEE, CAT, CLAT & more</span></span></a>
          </div>
        </div>
        <a href="${p}find-colleges.html" class="nav-link ${activePage==='find'?'active':''}">Find Colleges</a>
        <a href="${p}compare-colleges.html" class="nav-link ${activePage==='compare'?'active':''}">Compare</a>
        <a href="${p}study-abroad.html" class="nav-link ${activePage==='abroad'?'active':''}">Study Abroad</a>
        <a href="${p}about.html" class="nav-link ${activePage==='about'?'active':''}">About</a>
      </div>
      <div class="nav-cta">
        <button class="btn btn-primary btn-sm" data-modal="lead">Get Expert Counselling</button>
      </div>
      <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-nav" id="mobile-nav-drawer" role="dialog" aria-label="Mobile navigation" aria-modal="true">
    <a href="${p}medical-admissions.html" class="mobile-nav-link">🏥 Medical Admissions</a>
    <a href="${p}engineering-admissions.html" class="mobile-nav-link">⚙️ Engineering Admissions</a>
    <a href="${p}management-admissions.html" class="mobile-nav-link">📊 MBA & Management</a>
    <a href="${p}law-admissions.html" class="mobile-nav-link">⚖️ Law Admissions</a>
    <a href="${p}pharmacy-nursing.html" class="mobile-nav-link">💊 Pharmacy & Nursing</a>
    <div class="mobile-nav-section">
      <div class="mobile-nav-section-title">Guidance</div>
      <a href="${p}counselling.html" class="mobile-nav-sub">Counselling Hub</a>
      <a href="${p}entrance-exams.html" class="mobile-nav-sub">Entrance Exams</a>
      <a href="${p}nri-admissions.html" class="mobile-nav-sub">NRI Admissions</a>
      <a href="${p}study-abroad.html" class="mobile-nav-sub">Study Abroad</a>
    </div>
    <div class="mobile-nav-section">
      <div class="mobile-nav-section-title">Tools</div>
      <a href="${p}find-colleges.html" class="mobile-nav-sub">Find Colleges</a>
      <a href="${p}compare-colleges.html" class="mobile-nav-sub">Compare Colleges</a>
    </div>
    <div class="mobile-nav-section">
      <div class="mobile-nav-section-title">Info</div>
      <a href="${p}about.html" class="mobile-nav-sub">About Us</a>
      <a href="${p}contact.html" class="mobile-nav-sub">Contact</a>
      <a href="${p}resources.html" class="mobile-nav-sub">Resources</a>
    </div>
    <div style="margin-top:2rem;">
      <button class="btn btn-primary" style="width:100%" data-modal="lead">Get Expert Counselling</button>
    </div>
  </div>`;
  }

  function getFooter() {
    const p = getPathPrefix();
    return `<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-mega-grid">
      <!-- Col 1: Brand & Contact -->
      <div>
        <div style="margin-bottom:var(--sp-4);">
          <a href="${p}index.html" class="nav-logo" aria-label="College Corridor Home">
            <div class="nav-logo-badge-wrap">
              <img src="${p}assets/images/logo-badge.png" alt="College Corridor - Your Path. Our Purpose." style="height:52px;">
            </div>
          </a>
        </div>
        <p class="footer-brand-desc">
          Independent education consultancy providing data-backed admission advisory and counselling strategy across India &amp; abroad.
        </p>
        <div class="footer-contact-item">
          <span>📍</span>
          <span>A-314, Vision Business Park, Knowledge Park III, Greater Noida, UP 201306</span>
        </div>
        <div class="footer-contact-item">
          <span>📞</span>
          <a href="tel:+918194083803" class="footer-link">+91 8194083803</a>
        </div>
        <div class="footer-contact-item">
          <span>✉️</span>
          <a href="mailto:admissions@collegecorridor.com" class="footer-link">admissions@collegecorridor.com</a>
        </div>
        <div style="margin-top:var(--sp-4);">
          <a href="https://wa.me/918194083803" target="_blank" rel="noopener" class="btn btn-primary btn-sm">💬 Chat on WhatsApp</a>
        </div>
      </div>

      <!-- Col 2: Admissions -->
      <div>
        <div class="footer-col-title">Admissions</div>
        <div class="footer-links">
          <a href="${p}medical-admissions.html" class="footer-link">Medical (MBBS/MD)</a>
          <a href="${p}engineering-admissions.html" class="footer-link">Engineering (B.Tech)</a>
          <a href="${p}management-admissions.html" class="footer-link">Management (MBA)</a>
          <a href="${p}law-admissions.html" class="footer-link">Law Admissions</a>
          <a href="${p}pharmacy-nursing.html" class="footer-link">Pharmacy &amp; Nursing</a>
          <a href="${p}nri-admissions.html" class="footer-link">NRI Admissions</a>
          <a href="${p}other-programs.html" class="footer-link">Other Programs</a>
        </div>
      </div>

      <!-- Col 3: Guidance & Tools -->
      <div>
        <div class="footer-col-title">Guidance &amp; Tools</div>
        <div class="footer-links">
          <a href="${p}counselling.html" class="footer-link">Counselling Hub</a>
          <a href="${p}entrance-exams.html" class="footer-link">Entrance Exam Guidance</a>
          <a href="${p}find-colleges.html" class="footer-link">Find Colleges Filter</a>
          <a href="${p}compare-colleges.html" class="footer-link">Compare Colleges</a>
          <a href="${p}study-abroad.html" class="footer-link">Study Abroad</a>
          <a href="${p}resources.html" class="footer-link">Resources &amp; Guides</a>
        </div>
      </div>

      <!-- Col 4: Our Reach -->
      <div>
        <div class="footer-col-title">Our Reach</div>
        <p style="font-size:var(--fs-xs);color:rgba(248,250,252,0.8);line-height:1.6;margin-bottom:var(--sp-3);">
          <strong>Pan-India:</strong> Serving students across 28 States &amp; Union Territories, with dedicated counselling support in:
        </p>
        <div class="footer-links">
          <a href="${p}locations/delhi-ncr.html" class="footer-link">Delhi NCR</a>
          <a href="${p}locations/bengaluru.html" class="footer-link">Bengaluru</a>
          <a href="${p}locations/mumbai.html" class="footer-link">Mumbai</a>
          <a href="${p}locations/pune.html" class="footer-link">Pune</a>
          <a href="${p}locations/dehradun.html" class="footer-link">Dehradun</a>
        </div>
      </div>

      <!-- Col 5: Company -->
      <div>
        <div class="footer-col-title">Company</div>
        <div class="footer-links">
          <a href="${p}about.html" class="footer-link">About College Corridor</a>
          <a href="${p}contact.html" class="footer-link">Contact Us</a>
          <a href="${p}resources.html" class="footer-link">Knowledge Hub</a>
          <a href="${p}privacy-policy.html" class="footer-link">Privacy Policy</a>
          <a href="${p}terms-of-use.html" class="footer-link">Terms of Use</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-disclaimer">
        College Corridor is an independent education consultancy and admissions advisory service. We do not create, guarantee, or allot college seats, and we are not an official counselling, exam-conducting, or regulatory authority. All college predictions, probability estimates and admission strategies are indicative and based on available data — they do not guarantee any outcome. Eligibility, fees, quotas and processes vary by institution, state and admission year; please verify current details with the relevant official authority before making decisions.
      </p>
      <div class="footer-legal-bar">
        <p>© 2025 College Corridor. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="${p}privacy-policy.html">Privacy Policy</a>
          <a href="${p}terms-of-use.html">Terms of Use</a>
          <a href="${p}contact.html">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
  }

  function injectSharedElements() {
    const annSlot = document.getElementById('announcement-bar-slot');
    if (annSlot && !annSlot.children.length) {
      annSlot.innerHTML = getAnnouncement();
    }

    const navSlot = document.getElementById('navbar-slot');
    if (navSlot && !navSlot.children.length) {
      const active = navSlot.dataset.active || '';
      navSlot.innerHTML = getNavbar(active);
    }

    const footSlot = document.getElementById('footer-slot');
    if (footSlot && !footSlot.children.length) {
      footSlot.innerHTML = getFooter();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSharedElements);
  } else {
    injectSharedElements();
  }
})();