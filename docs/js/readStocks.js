// Read in each csv as a separate array
let csvData = '';

// TODO fix date parsing
function readStocks(company) {
  jQuery.get(`./data/${company}.csv`, function (txt) {
    companyStockData = txt;
  }).done(function () {
    companyStockData = dataCleaning(companyStockData);
    companyStockData = getRows(companyStockData);
    showHistory(company, companyStockData);
    switch(company){
      case 'ATVI':
        document.getElementById('summaryText').innerHTML = `Activision generally succeeds with action games. It is their most-sold genre with 299.78M copies sold. They are most popular in _____.`;
        break;
      case 'CCOEY':
        document.getElementById('summaryText').innerHTML = `Capcom generally succeeds with action games. It is their most-sold genre with 85.11M copies sold. They are most popular in _____.`;
        break;
      case 'EA':
        document.getElementById('summaryText').innerHTML = `EA generally succeeds with sports games. It is their most-sold genre with 479.52M copies sold. They are most popular in _____.`;
        break;
      case 'KNMCY':
        document.getElementById('summaryText').innerHTML = `Konami generally succeeds with sports games. It is their most-sold genre with 98.95M copies sold. They are most popular in _____.`;
        break;
      case 'MSFT':
        document.getElementById('summaryText').innerHTML = `Microsoft generally succeeds with shooter games. It is their most-sold genre with 95.44 copies sold. They are most popular in _____.
`;
        break;
      case 'NMBD':
        document.getElementById('summaryText').innerHTML = `Namco Bandai generally succeeds with fighting and role-playing games. These are their most-sold genres with 61.26M and 53.79M copies sold respectively. They are most popular in _____. `;
        break;
      case 'NTDOY':
        document.getElementById('summaryText').innerHTML = `Nintendo generally succeeds with ALL games. They have sold a total of 1786.36M copies of all of their games as of the collection of this data. They are most popular in _____. They are well-known for the Mario franchise.`;
        break;
      case 'SEGA':
        document.getElementById('summaryText').innerHTML = `SEGA generally succeeds with sports games. It is their most-sold genre with 71.68M copies sold. They are most popular in _____. `;
        break;
      case 'SNE':
        document.getElementById('summaryText').innerHTML = `Sony generally succeeds with racing games. It is their most-sold genre with 110.56M copies sold. They are most popular in _____. `;
        break;
      case 'THQN':
        document.getElementById('summaryText').innerHTML = `Activision generally succeeds with action games. It is their most-sold genre with 299.78M copies sold. They are most popular in _____.`;
        break;
      case 'TTWO':
        document.getElementById('summaryText').innerHTML = `Take-two generally succeeds with action games. It is their most-sold genre with 211.11M copies sold. They are most popular in _____. `;
        break;
      case 'UBIPA':
        document.getElementById('summaryText').innerHTML = `Ubisoft generally succeeds with action games. It is their most-sold genre with 146.96M copies sold. They are most popular in _____. `;
        break;

    }
  });
}

// Make every row into an object and add it to the array
function dataCleaning(dirtyData) {
  var dirtyNames = '';
  var dirtyObject = [];
  dirtyData = dirtyData.split('\n');
  if (dirtyData[0].includes(',')) {
    dirtyNames = dirtyData[0].split(',');
    dirtyData[0] = '';
    dirtyData.shift();
    for (var i = 0; i < dirtyData.length; i++) {
      var tempObject = {};
      for (var j = 0; j < dirtyNames.length; j++) {
        tempObject[dirtyNames[j]] = dirtyData[i].split(',')[j];
      }
      dirtyObject.push(tempObject);
    }
  } else {
    dirtyNames = dirtyData[0].split('\t');
    dirtyData.shift();
    for (var i = 0; i < dirtyData.length; i++) {
      var tempObject = {};
      for (var j = 0; j < dirtyNames.length; j++) {
        tempObject[dirtyNames[j]] = dirtyData[i].split('\t')[j];
      }
      dirtyObject.push(tempObject);
    }
  }
  return deString(dirtyObject);
}

// Parses fields from Strings into proper data types
function deString(stringData){
  for(let i = 0; i < stringData.length; i++){
    let row = stringData[i];
    row['Adj Close'] = parseFloat(row['Adj Close']);
    row['Close'] = parseFloat(row['Close']);
    const date = new Date(row['Date']);
    row['Date'] = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    row['Adj Close'] = parseFloat(row['Adj Close']);
    row['High'] = parseFloat(row['High']);
    row['Low'] = parseFloat(row['Low']);
    row['Open'] = parseFloat(row['Open']);
    row['Volume'] = parseInt(row['Volume']);
  }
  return stringData;
}
