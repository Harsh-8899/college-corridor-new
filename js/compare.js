/**
 * College Corridor — Dynamic Compare Colleges Engine
 * Lets users pick 2-3 colleges from COLLEGE_DATABASE and displays a real side-by-side comparison table
 */

document.addEventListener('DOMContentLoaded', () => {
  const selectCol1 = document.getElementById('select-col-1');
  const selectCol2 = document.getElementById('select-col-2');
  const selectCol3 = document.getElementById('select-col-3');
  const compareTableContainer = document.getElementById('compare-table-container');

  if (!window.COLLEGE_DATABASE || !compareTableContainer) return;

  // Populate Select Dropdowns
  function populateSelects() {
    const opts = ['<option value="">Select College...</option>']
      .concat(window.COLLEGE_DATABASE.map(c => `<option value="${c.id}">${c.name} (${c.programLabel} - ${c.city})</option>`));
    
    if (selectCol1) selectCol1.innerHTML = opts.join('');
    if (selectCol2) selectCol2.innerHTML = opts.join('');
    if (selectCol3) selectCol3.innerHTML = opts.join('');

    // Pre-select if URL params present
    const urlParams = new URLSearchParams(window.location.search);
    const col1Param = urlParams.get('col1');
    const col2Param = urlParams.get('col2');
    if (col1Param && selectCol1) selectCol1.value = col1Param;
    if (col2Param && selectCol2) selectCol2.value = col2Param;
  }

  function renderComparisonTable() {
    const id1 = selectCol1 ? selectCol1.value : '';
    const id2 = selectCol2 ? selectCol2.value : '';
    const id3 = selectCol3 ? selectCol3.value : '';

    const cols = [id1, id2, id3]
      .map(id => window.COLLEGE_DATABASE.find(c => c.id === id))
      .filter(Boolean);

    if (cols.length === 0) {
      compareTableContainer.innerHTML = `
        <div style="text-align:center;padding:var(--sp-12);background:var(--grad-card);border:1px solid var(--clr-border);border-radius:var(--radius-xl);">
          <div style="font-size:3rem;margin-bottom:var(--sp-3);">⚖️</div>
          <h3 style="margin-bottom:var(--sp-2);">Select Colleges Above to Compare</h3>
          <p style="font-size:var(--fs-sm);color:var(--clr-text-muted);max-width:460px;margin-inline:auto;margin-bottom:var(--sp-6);">
            Choose at least 2 colleges from the dropdown menus to generate a side-by-side analysis of fees, cutoffs, admission routes, and facilities.
          </p>
        </div>
      `;
      return;
    }

    let tableHtml = `
      <div class="table-wrap reveal visible">
        <table class="data-table" style="min-width:650px;">
          <thead>
            <tr>
              <th style="width:20%;">Comparison Factor</th>
              ${cols.map(c => `<th style="width:${80 / cols.length}%;">${c.name}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Program</strong></td>
              ${cols.map(c => `<td><span class="tag tag--gold">${c.programLabel}</span></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Institution Type</strong></td>
              ${cols.map(c => `<td>${c.typeLabel}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Location</strong></td>
              ${cols.map(c => `<td>📍 ${c.city}, ${c.state.toUpperCase()}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Est. Fees</strong></td>
              ${cols.map(c => `<td style="font-weight:700;color:var(--clr-slate);">${c.feesDisplay}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Admission Route</strong></td>
              ${cols.map(c => `<td>${c.routeLabel}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Historical Cutoff Range</strong></td>
              ${cols.map(c => `<td style="font-size:var(--fs-xs);">${c.cutoffNote}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Campus Facilities</strong></td>
              ${cols.map(c => `<td style="font-size:var(--fs-xs);color:var(--clr-text-2);">${c.facilities}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Advisory Action</strong></td>
              ${cols.map(c => `<td><button class="btn btn-primary btn-sm" data-modal="lead" data-program="${c.program}">Book Guidance</button></td>`).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    compareTableContainer.innerHTML = tableHtml;
  }

  populateSelects();
  renderComparisonTable();

  [selectCol1, selectCol2, selectCol3].forEach(sel => {
    if (sel) sel.addEventListener('change', renderComparisonTable);
  });
});
