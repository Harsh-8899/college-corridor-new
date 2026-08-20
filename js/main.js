/* =========================================================
   College Corridor — main.js
   Shared: Nav, Mobile Menu, Modal, Scroll Effects, Particles
   ========================================================= */

(function() {
  'use strict';

  /* ── DOM Ready ─────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNav();
    initMobileMenu();
    initModal();
    initScrollReveal();
    initCounters();
    initParticles();
    initTabs();
    setActiveNavLink();
  }

  /* ── Navbar scroll behavior ─────────────────────────── */
  function initNav() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const cur = window.scrollY;
      if (cur > 50) navbar.classList.add('scrolled');
      else          navbar.classList.remove('scrolled');
      lastScroll = cur;
    }, { passive: true });

    // Dropdown keyboard & focus
    document.querySelectorAll('.nav-dropdown').forEach(dd => {
      const btn = dd.querySelector('.nav-dropdown-btn');
      if (!btn) return;

      btn.addEventListener('click', (e) => {
        const isOpen = dd.classList.toggle('open');
        // close others
        document.querySelectorAll('.nav-dropdown.open').forEach(other => {
          if (other !== dd) other.classList.remove('open');
        });
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown.open').forEach(dd => dd.classList.remove('open'));
      }
    });
  }

  /* ── Mobile Menu ────────────────────────────────────── */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.classList.toggle('mobile-menu-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileMenu);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        closeMobileMenu();
      }
    });

    
    const closeBtn = mobileNav.querySelector('.mobile-nav-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu() {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  /* ── Lead Form Modal ───────────────────────────────── */
  function initModal() {
    const overlay = document.getElementById('lead-modal');
    if (!overlay) return;

    const closeBtn = overlay.querySelector('.modal-close');
    const form     = overlay.querySelector('#lead-form');

    // Open triggers (Event delegation on document for 100% reliability across all dynamically rendered elements)
    document.addEventListener('click', (e) => {
      const modalBtn = e.target.closest('[data-modal="lead"]');
      if (modalBtn) {
        e.preventDefault();
        openModal(modalBtn.dataset.program || '');
      }
    });

    // Close
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    // Form submit
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    function openModal(program) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';

      // Pre-select program if provided
      const select = overlay.querySelector('#program-interest');
      if (select && program) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value.toLowerCase().includes(program.toLowerCase())) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    function handleFormSubmit(e) {
      e.preventDefault();
      const formEl  = e.target;
      const success = overlay.querySelector('.form-success');
      const formWrap = overlay.querySelector('.form-wrap');

      // Basic validation
      const inputs = formEl.querySelectorAll('[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = 'var(--clr-red)';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });
      if (!valid) return;

      const submitBtn = formEl.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      const formData = new FormData(formEl);
      const name = formData.get('full_name') || formData.get('name') || 'Student';
      const phone = formData.get('phone') || 'N/A';
      const email = formData.get('email') || 'N/A';
      const program = formData.get('program_interest') || 'General Counselling';
      const message = formData.get('message') || '';
      const pageSource = window.location.pathname || 'homepage';

      formData.append('page_source', pageSource);
      formData.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

      // 1. Post to Local API / Lead Tracker
      fetch('/api/lead', {
        method: 'POST',
        body: formData
      }).catch(err => console.log('Local lead log notice:', err));

      // 2. Post to FormSubmit API (Direct Delivery to admissions@collegecorridor.com)
      const officialEmail = window.NOTIFICATION_EMAIL || 'admissions@collegecorridor.com';
      fetch(`https://formsubmit.co/ajax/${officialEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `🎓 New Admission Enquiry: ${name} (${program})`,
          Name: name,
          Phone: phone,
          Email: email,
          Program: program,
          Message: message,
          PageSource: pageSource
        })
      }).catch(err => console.log('FormSubmit Client Dispatch:', err));

      // 3. Post to Web3Forms API
      if (window.WEB3FORMS_ACCESS_KEY && window.WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        formData.append('access_key', window.WEB3FORMS_ACCESS_KEY);
        formData.append('subject', `🎓 New Admission Enquiry: ${name} (${program})`);
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        }).catch(err => console.log('Web3Forms Client Dispatch:', err));
      }

      // Show UI Success
      if (formWrap)  formWrap.style.display = 'none';
      if (success)   success.classList.add('show');

      // 3. Open WhatsApp with pre-filled enquiry message
      const waNumber = window.WHATSAPP_NUMBER || '918194083803';
      const waText = encodeURIComponent(
        `🎓 *New College Corridor Admission Enquiry*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `✉️ *Email:* ${email}\n` +
        `📚 *Program:* ${program}\n` +
        (message ? `📝 *Message:* ${message}\n` : '') +
        `📍 *Source:* Website`
      );
      
      const waUrl = `https://wa.me/${waNumber}?text=${waText}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);
    }
  }

  /* ── Scroll Reveal ─────────────────────────────────── */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!reveals.length) return;

    reveals.forEach(el => el.classList.add('visible'));

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });

      reveals.forEach(el => observer.observe(el));
    }
  }

  /* ── Stat Counter Animation ─────────────────────────── */
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));

    function animateCounter(el) {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const step = 20;
      const increment = target / (duration / step);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
      }, step);
    }
  }

  /* ── Canvas Particle Background ─────────────────────── */
  function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function resize() {
      width  = canvas.width  = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      createParticles();
    }

    function createParticles() {
      const count = Math.min(Math.floor((width * height) / 18000), 50);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          gold: Math.random() > 0.6
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(227,162,60,${p.alpha})`
          : `rgba(245,243,236,${p.alpha * 0.65})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = `rgba(227,162,60,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    draw();
  }

  /* ── Tab Switcher ───────────────────────────────────── */
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(container => {
      const btns   = container.querySelectorAll('.tab-btn');
      const panels = container.querySelectorAll('.tab-panel');

      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;

          btns.forEach(b => b.classList.toggle('active', b === btn));
          panels.forEach(p => p.classList.toggle('active', p.id === target));
        });
      });
    });
  }

  /* ── Active Nav Link Highlight ──────────────────────── */
  function setActiveNavLink() {
    const page = document.body.dataset.page;
    if (!page) return;

    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.page === page) {
        link.classList.add('active');
      }
    });
  }

})();
