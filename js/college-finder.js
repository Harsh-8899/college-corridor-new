/* =========================================================
   College Corridor — college-finder.js
   Interactive College Discovery Tool Logic
   ========================================================= */

(function() {
  'use strict';

  // Sample College Dataset
  const sampleColleges = [
    {
      id: 1,
      name: "RV College of Engineering (RVCE)",
      location: "Bengaluru, Karnataka",
      state: "karnataka",
      course: "btech",
      type: "private",
      route: "entrance",
      budgetLakhs: 16,
      cutoff: "KCET / COMEDK top ranks",
      tags: ["CSE", "AI/ML", "ECE", "Autonomous"]
    },
    {
      id: 2,
      name: "MS Ramaiah Institute of Technology (MSRIT)",
      location: "Bengaluru, Karnataka",
      state: "karnataka",
      course: "btech",
      type: "private",
      route: "counselling",
      budgetLakhs: 15,
      cutoff: "COMEDK / KCET",
      tags: ["CSE", "AI", "ECE"]
    },
    {
      id: 3,
      name: "Shiv Nadar University",
      location: "Greater Noida, Delhi NCR",
      state: "delhi",
      course: "btech",
      type: "university",
      route: "entrance",
      budgetLakhs: 18,
      cutoff: "SNUSAT / JEE Main",
      tags: ["CSE", "AI/ML", "Research"]
    },
    {
      id: 4,
      name: "UPES Dehradun",
      location: "Dehradun, Uttarakhand",
      state: "uttarakhand",
      course: "btech",
      type: "university",
      route: "entrance",
      budgetLakhs: 18,
      cutoff: "UPESEAT / JEE Main",
      tags: ["CSE", "Cybersecurity", "AI"]
    },
    {
      id: 5,
      name: "COEP Technological University",
      location: "Pune, Maharashtra",
      state: "maharashtra",
      course: "btech",
      type: "government",
      route: "counselling",
      budgetLakhs: 6,
      cutoff: "MHT-CET top ranks",
      tags: ["Premier", "CSE", "ECE"]
    },
    {
      id: 6,
      name: "Kasturba Medical College (KMC)",
      location: "Manipal, Karnataka",
      state: "karnataka",
      course: "mbbs",
      type: "deemed",
      route: "counselling",
      budgetLakhs: 75,
      cutoff: "NEET UG ~550+",
      tags: ["Deemed", "MBBS", "Top Ranked"]
    },
    {
      id: 7,
      name: "St. John's Medical College",
      location: "Bengaluru, Karnataka",
      state: "karnataka",
      course: "mbbs",
      type: "private",
      route: "counselling",
      budgetLakhs: 35,
      cutoff: "NEET UG High Rank",
      tags: ["MBBS", "Private", "Clinical"]
    },
    {
      id: 8,
      name: "Symbiosis Institute of Business Management (SIBM)",
      location: "Pune, Maharashtra",
      state: "maharashtra",
      course: "mba",
      type: "deemed",
      route: "entrance",
      budgetLakhs: 24,
      cutoff: "SNAP 98+ %ile",
      tags: ["MBA", "SNAP", "Top B-School"]
    }
  ];

  document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('filter-search-btn');
    if (!searchBtn) return;

    searchBtn.addEventListener('click', filterColleges);
    // Initial render
    filterColleges();
  });

  function filterColleges() {
    const course = (document.getElementById('filter-course')?.value || '').toLowerCase();
    const state  = (document.getElementById('filter-state')?.value || '').toLowerCase();
    const budgetVal = document.getElementById('filter-budget')?.value || '';
    const type   = (document.getElementById('filter-type')?.value || '').toLowerCase();
    const route  = (document.getElementById('filter-route')?.value || '').toLowerCase();

    let budgetMax = Infinity;
    if (budgetVal) {
      if (budgetVal === 'above') budgetMax = 999;
      else budgetMax = parseInt(budgetVal, 10);
    }

    const filtered = sampleColleges.filter(col => {
      if (course && col.course !== course) return false;
      if (state && col.state !== state) return false;
      if (type && col.type !== type) return false;
      if (route && col.route !== route) return false;
      if (col.budgetLakhs > budgetMax) return false;
      return true;
    });

    renderResults(filtered);
  }

  function renderResults(list) {
    const resultsContainer = document.getElementById('college-results');
    if (!resultsContainer) return;

    if (list.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align:center;padding:var(--sp-12);background:var(--grad-card);border:1px solid var(--clr-border);border-radius:var(--radius-xl);">
          <div style="font-size:3rem;margin-bottom:var(--sp-3);">🔍</div>
          <h3 style="margin-bottom:var(--sp-2);">No colleges match all specific filters</h3>
          <p style="font-size:var(--fs-sm);color:var(--clr-text-muted);margin-bottom:var(--sp-6);">Try adjusting your filters or talk directly with a counsellor to find options tailored to your rank and budget.</p>
          <button class="btn btn-primary" data-modal="lead">Talk to a Counsellor</button>
        </div>
      `;
      return;
    }

    let html = `
      <div style="margin-bottom:var(--sp-4);font-size:var(--fs-sm);color:var(--clr-text-muted);">
        Showing <strong>${list.length}</strong> matching college options (sample preview):
      </div>
      <div class="grid-2 stagger">
    `;

    list.forEach(col => {
      html += `
        <div class="card reveal" style="display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:var(--sp-3);margin-bottom:var(--sp-3);">
              <h3 style="font-size:var(--fs-xl);line-height:1.2;">${col.name}</h3>
              <span class="tag tag--gold" style="font-size:10px;text-transform:uppercase;">${col.type}</span>
            </div>
            <div style="font-size:var(--fs-xs);color:var(--clr-text-muted);margin-bottom:var(--sp-4);">📍 ${col.location}</div>
            <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2);margin-bottom:var(--sp-4);">
              ${col.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div style="font-size:var(--fs-xs);color:var(--clr-text-2);margin-bottom:var(--sp-2);">
              <strong>Estimated Cost:</strong> ~₹${col.budgetLakhs} Lakhs total
            </div>
            <div style="font-size:var(--fs-xs);color:var(--clr-text-2);">
              <strong>Cutoff Benchmark:</strong> ${col.cutoff}
            </div>
          </div>
          <div style="margin-top:var(--sp-6);display:flex;gap:var(--sp-3);align-items:center;">
            <button class="btn btn-primary btn-sm" style="flex:1;" data-modal="lead" data-program="${col.course}">Enquire Admission</button>
            <a href="compare-colleges.html" class="btn btn-secondary btn-sm">Compare</a>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    resultsContainer.innerHTML = html;
  }
})();
