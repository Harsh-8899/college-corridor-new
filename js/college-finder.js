/**
 * College Corridor — Dynamic Find Colleges Engine
 * Connects Filter UI on find-colleges.html with COLLEGE_DATABASE
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterCourse = document.getElementById('filter-course');
  const filterState = document.getElementById('filter-state');
  const filterBudget = document.getElementById('filter-budget');
  const filterType = document.getElementById('filter-type');
  const filterRoute = document.getElementById('filter-route');
  const filterSearchBtn = document.getElementById('filter-search-btn');
  const resultsContainer = document.getElementById('college-results');

  if (!resultsContainer || !window.COLLEGE_DATABASE) return;

  function renderResults() {
    const courseVal = filterCourse ? filterCourse.value.toLowerCase() : '';
    const stateVal = filterState ? filterState.value.toLowerCase() : '';
    const budgetVal = filterBudget ? filterBudget.value : '';
    const typeVal = filterType ? filterType.value.toLowerCase() : '';
    const routeVal = filterRoute ? filterRoute.value.toLowerCase() : '';

    const filtered = window.COLLEGE_DATABASE.filter(col => {
      if (courseVal && col.program.toLowerCase() !== courseVal) return false;
      if (stateVal && col.state.toLowerCase() !== stateVal) return false;
      if (typeVal && col.type.toLowerCase() !== typeVal) return false;
      if (routeVal && !col.route.toLowerCase().includes(routeVal)) return false;
      
      if (budgetVal) {
        const b = parseFloat(budgetVal);
        if (!isNaN(b) && col.feeRange > b) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align:center;padding:var(--sp-12);background:var(--grad-card);border:1px solid var(--clr-border);border-radius:var(--radius-xl);">
          <div style="font-size:3rem;margin-bottom:var(--sp-3);">🔍</div>
          <h3 style="margin-bottom:var(--sp-2);">No Exact Match Found</h3>
          <p style="font-size:var(--fs-sm);color:var(--clr-text-muted);max-width:460px;margin-inline:auto;margin-bottom:var(--sp-6);">
            We couldn't find colleges matching all selected filters. Try broadening your criteria or get a personalized list from an advisor.
          </p>
          <button class="btn btn-primary" data-modal="lead">Talk to a Counsellor for Options</button>
        </div>
      `;
      return;
    }

    let cardsHtml = `
      <div style="margin-bottom:var(--sp-6);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--sp-4);">
        <h3 style="font-size:var(--fs-xl);">Showing ${filtered.length} Matching College Options</h3>
        <span style="font-size:var(--fs-xs);color:var(--clr-text-muted);">* Indicative fees & cutoffs based on institutional data</span>
      </div>
      <div class="grid-auto stagger" style="gap:var(--sp-6);">
    `;

    filtered.forEach(col => {
      cardsHtml += `
        <div class="card reveal visible" style="display:flex;flex-direction:column;justify-content:space-between;padding:var(--sp-6);">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-3);">
              <span class="tag tag--gold" style="font-size:10px;">${col.programLabel}</span>
              <span class="tag" style="font-size:10px;">${col.typeLabel}</span>
            </div>
            <h3 style="font-size:var(--fs-lg);color:var(--clr-slate-dark);margin-bottom:var(--sp-2);">${col.name}</h3>
            <p style="font-size:var(--fs-xs);color:var(--clr-text-2);margin-bottom:var(--sp-3);">📍 ${col.city}, ${col.state.toUpperCase()}</p>
            <div style="padding:var(--sp-3);background:rgba(255,255,255,0.04);border:1px solid var(--clr-border);border-radius:var(--radius-sm);margin-bottom:var(--sp-4);">
              <div style="font-size:var(--fs-xs);color:var(--clr-text-muted);margin-bottom:2px;">Est. Course Fees:</div>
              <div style="font-weight:700;color:var(--clr-slate);font-size:var(--fs-sm);">${col.feesDisplay}</div>
              <div style="font-size:11px;color:var(--clr-text-muted);margin-top:4px;">Cutoff Range: ${col.cutoffNote}</div>
            </div>
          </div>
          <div style="display:flex;gap:var(--sp-2);margin-top:var(--sp-2);">
            <button class="btn btn-primary btn-sm" style="flex:1;" data-modal="lead" data-program="${col.program}">Get Guidance</button>
            <a href="compare-colleges?col1=${col.id}" class="btn btn-secondary btn-sm">Compare</a>
          </div>
        </div>
      `;
    });

    cardsHtml += `</div>`;
    resultsContainer.innerHTML = cardsHtml;
  }

  if (filterSearchBtn) {
    filterSearchBtn.addEventListener('click', renderResults);
  }

});
