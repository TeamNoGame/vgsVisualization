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
    var data = {
      x: [],
      y: [],
      mode: 'line',
    };

    const layout = {
      title: `${name} Stock History`,
      yaxis: {
        title: 'USD (Close Values)',
      }
    };
    function graph2() {
      var graphElem = document.getElementById('stockLine');
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
    // var showGraphs = document.getElementById('gameDashboard');
    //   var graphDiv = document.createElement('div');
    //   var titleDiv = document.createElement('div');
    //   var sunBurstTitle = document.createElement('h2');
    //   var content = document.createTextNode('Sales by Genre/Region in Millions');
    //   var root = objectName;
    //
    //   titleDiv.style.paddingBottom = "7px";
    //   titleDiv.style.textAlign = "center";
    //   titleDiv.style.fontFamily = "Open Sans, verdana, arial, sans-serif";
    //   titleDiv.style.fontSize = "15%";
    //   titleDiv.style.fill = "rgb(68, 68, 68)";
    //   titleDiv.style.opacity = "1";
    //   titleDiv.style.fontWeight = "normal";
    //   titleDiv.style.whiteSpace = "pre";
    //
    //   titleDiv.append(content);
    //   graphDiv.appendChild(titleDiv);
  }
}