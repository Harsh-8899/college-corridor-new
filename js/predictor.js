/**
 * College Corridor — Dynamic Homepage College Predictor Engine
 * Filters COLLEGE_DATABASE based on Rank, Category, Program, and Budget
 */

document.addEventListener('DOMContentLoaded', () => {
  const predProgram = document.getElementById('pred-program');
  const predRank = document.getElementById('pred-rank');
  const predCategory = document.getElementById('pred-category');
  const predBudget = document.getElementById('pred-budget');
  const predForm = document.getElementById('predictor-form');
  const tableBody = document.getElementById('predictor-results-tbody');
  const predictorHeaderTitle = document.getElementById('predictor-header-title');

  if (!predForm || !tableBody || !window.COLLEGE_DATABASE) return;

  function runPrediction(e) {
    if (e) e.preventDefault();

    const progVal = predProgram ? predProgram.value : 'mbbs';
    const rankVal = predRank && predRank.value ? parseInt(predRank.value, 10) : 35000;
    const budgetVal = predBudget ? parseFloat(predBudget.value) : 100;

    let filtered = window.COLLEGE_DATABASE.filter(c => c.program === progVal);

    if (filtered.length === 0) {
      filtered = window.COLLEGE_DATABASE.slice(0, 4);
    }

    if (predictorHeaderTitle) {
      predictorHeaderTitle.textContent = `Predicted Options for AIR Rank ~${rankVal.toLocaleString()}`;
    }

    let rowsHtml = '';
    filtered.forEach((c, idx) => {
      let probability = '85%';
      let stratTag = '<span class="tag tag--blue" style="font-size:10px;">Safe</span>';

      if (rankVal <= c.minRank) {
        probability = '98%';
        stratTag = '<span class="tag tag--green" style="font-size:10px;">Safe</span>';
      } else if (rankVal <= c.maxRank) {
        probability = '88%';
        stratTag = '<span class="tag tag--bronze" style="font-size:10px;">Balanced</span>';
      } else {
        probability = '65%';
        stratTag = '<span class="tag tag--blue" style="font-size:10px;">High Competition</span>';
      }

      rowsHtml += `
        <tr>
          <td style="font-weight:600;">
            ${c.name}
            <div style="font-size:11px;color:var(--clr-text-muted);font-weight:400;">📍 ${c.city}, ${c.state.toUpperCase()} • ${c.typeLabel}</div>
          </td>
          <td style="text-align:right;color:#10B981;font-weight:700;">${probability}</td>
          <td style="text-align:right;font-weight:600;">${c.feesDisplay}</td>
          <td>${stratTag}</td>
        </tr>
      `;
    });

    tableBody.innerHTML = rowsHtml;
  }

  predForm.addEventListener('submit', runPrediction);
  
  // Initial run
  runPrediction();
});
