let dates = [], closeValues = [];

function getRows(company) {
  for(let i = 0; i < company.length; i++){
    const row = company[i];
    dates.push(row['Date']);
    closeValues.push(row['Close']);
  }
  return {dates, closeValues};
}

function showHistory(name, csv){
  const data = {
    x: csv.dates,
    y: csv.closeValues,
    mode: 'line'
  };

  const layout = {
    title: `${name} Stock History`,
  };

  Plotly.newPlot('stockLine', [data], layout, {responsive: true });
}
