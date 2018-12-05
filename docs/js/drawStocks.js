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
  if (name !== 'NMBD' && csv.dates.length > 1000) {
    var start = 0;
    var graphElem = document.getElementById('stockLine');
    var data = {
      x: [],
      y: [],
      mode: 'line',
    };

    const layout = {
      title: `${name} Stock History`,
      yaxis: {
        title: 'Close Value',
      }
    };

    Plotly.newPlot(graphElem, [data], layout, { responsive: true });

    function graph2() {
      var graphId = setInterval(addToStock, 0.1);
      function addToStock() {
        console.log(start);
        console.log(csv.dates.length);
        if (start > (csv.dates.length - 1)) {
          layout.title = `${name} Stock History from ${csv.dates[0]} to ${csv.dates[csv.dates.length - 2]}`;
          data.x.push(csv.dates[csv.dates.length - 2]);
          data.y.push(csv.closeValues[csv.dates.length - 2]);
          Plotly.newPlot(graphElem, [data], layout, { responsive: true });
          clearInterval(graphId);
        } else {
          data.x.push(csv.dates[start]);
          data.y.push(csv.closeValues[start]);
          Plotly.newPlot(graphElem, [data], layout, { responsive: true });
          start += parseInt(csv.dates.length / 500);
        }
      }
    }
    graph2();
  } else {
    var stockDiv = document.getElementById('stockLine');
    stockDiv.style.width = '100%';
    stockDiv.style.textAlign = 'center';
    stockDiv.style.minHeight = '150px';
    var noStockHeader = document.createElement('h2');
    noStockHeader.style.marginTop = '10%';
    var noStockTitle = document.createTextNode('Oops! No Stock Information Available!');
    noStockHeader.appendChild(noStockTitle);
    stockDiv.append(noStockHeader);
  }
}