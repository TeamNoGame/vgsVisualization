// Read in each csv as a separate array
let csvData = '';

// TODO fix date parsing
function readStocks(company) {
  if (company != 'NMBD') {
    jQuery.get(`./data/${company}.csv`, function (txt) {
      companyStockData = txt;
    }).done(function () {
      companyStockData = dataCleaning(companyStockData);
      companyStockData = getRows(companyStockData);
      setTimeout(function(){
        showHistory(company, companyStockData);
      },2700);
      let topFive, values, data;
      switch(company){
        case 'ATVI':
          document.getElementById('summaryText').innerHTML = `Activision generally succeeds with shooter games. It is their most-sold genre with 299.78M copies sold. They are most popular in North America, where 29% of their sales come from. They are best known for the Call of Duty series.`;
          topFive = findTopRanks('Activision');

          values = [
              [1, 2, 3, 4, 5],
              [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
              [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
              [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
              [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
              [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

            Plotly.plot('top5Graph', data, {title: "Top 5 Games"});

          break;
        case 'CCOEY':
          document.getElementById('summaryText').innerHTML = `Capcom generally succeeds with action games. It is their most-sold genre with 85.11M copies sold. They are most popular in North America and Japan, which make of 20% and 17% of their sales respectively. They are well-known for the Street Fighter and Monster Hunter series, the latter of which is massively popular in Japan.`;
          topFive = findTopRanks('Capcom');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'EA':
          document.getElementById('summaryText').innerHTML = `EA generally succeeds with sports games. It is their most-sold genre with 479.52M copies sold. They are most popular in North America, which is where a whopping 53% of their sales comes from. They are best known for the FIFA and Star Wars Battlefront series.`;
          topFive = findTopRanks('Electronic Arts');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'KNMCY':
          document.getElementById('summaryText').innerHTML = `Konami generally succeeds with sports and action games. Those are their most-sold genre with 98.95M and 71.21M copies sold, respectively. They are most popular in NA, which makes up 32.6% of their sales, but Japan is not far behind with 32.2% of their sales. They are best known for the Metal Gear Solid Series, but the World Soccer series is also very popular in Japan.`;
          topFive = findTopRanks('Konami Digital Entertainment');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'MSFT':
          document.getElementById('summaryText').innerHTML = `Microsoft generally succeeds with shooter games. It is their most-sold genre with 95.44 copies sold. They are most popular in North America, where an amazing 63% of their copies are sold. They are most known for the Halo series and also notably bought Minecraft in 2014.`;
          topFive = findTopRanks('Microsoft Game Studios');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'NMBD':
          document.getElementById('summaryText').innerHTML = `Bandai Namco generally succeeds with fighting and role-playing games. These are their most-sold genres with 61.26M and 53.79M copies sold respectively. They are most popular in Japan, which is where 50% of their sales come from. They are best known for the Tekken and Dark Souls series.`;
          topFive = findTopRanks('Namco Bandai Games');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'NTDOY':
          document.getElementById('summaryText').innerHTML = `Nintendo generally succeeds with platforming games. They have sold a total of 1786.36M copies of all of their games as of the collection of this data. They are most popular in North America, where 45% of their sales are made. They are well-known for the Mario and Pokemon franchises.`;
          topFive = findTopRanks('Nintendo');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'SEGA':
          document.getElementById('summaryText').innerHTML = `SEGA generally succeeds with sports games. It is their most-sold genre with 71.68M copies sold. They are most popular in North America, with Europe not far behind. Thy are best known for the Sonic franchise.`;
          topFive = findTopRanks('Sega');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'SNE':
          document.getElementById('summaryText').innerHTML = `Sony generally succeeds with racing games. It is their most-sold genre with 110.56M copies sold. They are most popular in North America, which is where 43% of tbeir sales come from. They are best known for the Gran Turismo and Final Fantasy series.`;
          topFive = findTopRanks('Sony Computer Entertainment');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'THQN':
          document.getElementById('summaryText').innerHTML = `THQ generally succeeds with action games. It is their most-sold genre with 88.99M copies sold. They are most popular in North America, where 55% of their sales come from. They are best known for the WWF and WWE series.`;
          topFive = findTopRanks('THQ');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'TTWO':
          document.getElementById('summaryText').innerHTML = `Take-two generally succeeds with action games. It is their most-sold genre with 211.11M copies sold. They are most popular in North America. Their second-most popular region is Europe, which makes up only half of the sales in comparison to North America. They are best known for the Grand Theft Auto series.`;
          topFive = findTopRanks('Take-Two Interactive');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
        case 'UBIPA':
          document.getElementById('summaryText').innerHTML = `Ubisoft generally succeeds with action games. It is their most-sold genre with 146.96M copies sold. They are most popular in North America, which is where 53% of their sales come from. They are best known for the Assasin's Creed and Just Dance series.`;
          topFive = findTopRanks('Ubisoft');
          values = [
            [1, 2, 3, 4, 5],
            [topFive[0]['Name'], topFive[1]['Name'], topFive[2]['Name'], topFive[3]['Name'], topFive[4]['Name']],
            [topFive[0]['Genre'], topFive[1]['Genre'], topFive[2]['Genre'], topFive[3]['Genre'], topFive[4]['Genre']],
            [topFive[0]['Platform'], topFive[1]['Platform'], topFive[2]['Platform'], topFive[3]['Platform'], topFive[4]['Platform']],
            [topFive[0]['Year'], topFive[1]['Year'], topFive[2]['Year'], topFive[3]['Year'], topFive[4]['Year']],
            [topFive[0]['Global_Sales'], topFive[1]['Global_Sales'], topFive[2]['Global_Sales'], topFive[3]['Global_Sales'], topFive[4]['Global_Sales']]
          ];
          data = [{
            type: 'table',
            header: {
              values: [['Rank'], ['Name'], ['Genre'], ['Platform'], ['Year'], ['Sales (M)']],
            },
            cells: {
              values: values,
            }
          }];

          Plotly.plot('top5Graph', data, {title: "Top 5 Games"});
          break;
      }
    });
  } else {
    document.getElementById('summaryText').innerHTML = `Bandai Namco generally succeeds with fighting and role-playing games. These are their most-sold genres with 61.26M and 53.79M copies sold respectively. They are most popular in Japan, which is where 50% of their sales come from. They are best known for the Tekken and Dark Souls series.`;
    showHistory(company, companyStockData);
  }
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

function findTopRanks(publisher){
  let topRanks = [];
  let j = 0;
  for(let i = 0; i < vgsData.length; i++) {
    const row = vgsData[i];
    if (row['Publisher'] == publisher) {
      topRanks[j] = row;
      j++;
    }
    if(j >= 5) break;
  }
  return topRanks;
}
