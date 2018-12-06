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
      let topFive;
      switch(company){
        case 'ATVI':
          document.getElementById('summaryText').innerHTML = `Activision generally succeeds with shooter games. It is their most-sold genre with 299.78M copies sold. They are most popular in North America, where 29% of their sales come from. They are best known for the Call of Duty series.`;
          topFive = findTopRanks('Activision');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'CCOEY':
          document.getElementById('summaryText').innerHTML = `Capcom generally succeeds with action games. It is their most-sold genre with 85.11M copies sold. They are most popular in North America and Japan, which make of 20% and 17% of their sales respectively. They are well-known for the Street Fighter and Monster Hunter series, the latter of which is massively popular in Japan.`;
          topFive = findTopRanks('Capcom');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'EA':
          document.getElementById('summaryText').innerHTML = `EA generally succeeds with sports games. It is their most-sold genre with 479.52M copies sold. They are most popular in North America, which is where a whopping 53% of their sales comes from. They are best known for the FIFA and Star Wars Battlefront series.`;
          topFive = findTopRanks('Electronic Arts');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'KNMCY':
          document.getElementById('summaryText').innerHTML = `Konami generally succeeds with sports and action games. Those are their most-sold genre with 98.95M and 71.21M copies sold, respectively. They are most popular in NA, which makes up 32.6% of their sales, but Japan is not far behind with 32.2% of their sales. They are best known for the Metal Gear Solid Series, but the World Soccer series is also very popular in Japan.`;
          topFive = findTopRanks('Konami Digital Entertainment');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'MSFT':
          document.getElementById('summaryText').innerHTML = `Microsoft generally succeeds with shooter games. It is their most-sold genre with 95.44 copies sold. They are most popular in North America, where an amazing 63% of their copies are sold. They are most known for the Halo series and also notably bought Minecraft in 2014.`;
          topFive = findTopRanks('Microsoft Game Studios');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'NMBD':
          document.getElementById('summaryText').innerHTML = `Bandai Namco generally succeeds with fighting and role-playing games. These are their most-sold genres with 61.26M and 53.79M copies sold respectively. They are most popular in Japan, which is where 50% of their sales come from. They are best known for the Tekken and Dark Souls series.`;
          topFive = findTopRanks('Namco Bandai Games');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'NTDOY':
          document.getElementById('summaryText').innerHTML = `Nintendo generally succeeds with platforming games. They have sold a total of 1786.36M copies of all of their games as of the collection of this data. They are most popular in North America, where 45% of their sales are made. They are well-known for the Mario and Pokemon franchises.`;
          topFive = findTopRanks('Nintendo');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'SEGA':
          document.getElementById('summaryText').innerHTML = `SEGA generally succeeds with sports games. It is their most-sold genre with 71.68M copies sold. They are most popular in North America, with Europe not far behind. Thy are best known for the Sonic franchise.`;
          topFive = findTopRanks('Sega');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'SNE':
          document.getElementById('summaryText').innerHTML = `Sony generally succeeds with racing games. It is their most-sold genre with 110.56M copies sold. They are most popular in North America, which is where 43% of tbeir sales come from. They are best known for the Gran Turismo and Final Fantasy series.`;
          topFive = findTopRanks('Sony Computer Entertainment');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'THQN':
          document.getElementById('summaryText').innerHTML = `THQ generally succeeds with action games. It is their most-sold genre with 88.99M copies sold. They are most popular in North America, where 55% of their sales come from. They are best known for the WWF and WWE series.`;
          topFive = findTopRanks('THQ');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'TTWO':
          document.getElementById('summaryText').innerHTML = `Take-two generally succeeds with action games. It is their most-sold genre with 211.11M copies sold. They are most popular in North America. Their second-most popular region is Europe, which makes up only half of the sales in comparison to North America. They are best known for the Grand Theft Auto series.`;
          topFive = findTopRanks('Take-Two Interactive');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
          break;
        case 'UBIPA':
          document.getElementById('summaryText').innerHTML = `Ubisoft generally succeeds with action games. It is their most-sold genre with 146.96M copies sold. They are most popular in North America, which is where 53% of their sales come from. They are best known for the Assasin's Creed and Just Dance series.`;
          topFive = findTopRanks('Ubisoft');
          document.getElementById('list-rank1-list').innerHTML = `Rank 1:  ${topFive[0]['Name']}`;
          document.getElementById('list-rank2-list').innerHTML = `Rank 2: ${topFive[1]['Name']}`;
          document.getElementById('list-rank3-list').innerHTML = `Rank 3: ${topFive[2]['Name']}`;
          document.getElementById('list-rank4-list').innerHTML = `Rank 4: ${topFive[3]['Name']}`;
          document.getElementById('list-rank5-list').innerHTML = `Rank 5: ${topFive[4]['Name']}`;
          document.getElementById('list-rank1').innerText = `Genre: ${topFive[0]['Genre']}
          Platform: ${topFive[0]['Platform']}
          Year: ${topFive[0]['Year']}
          Sales: ${topFive[0]['Global_Sales']}M`;
          document.getElementById('list-rank2').innerText = `Genre: ${topFive[1]['Genre']}
          Platform: ${topFive[1]['Platform']}
          Year: ${topFive[1]['Year']}
          Sales: ${topFive[1]['Global_Sales']}M`;
          document.getElementById('list-rank3').innerText = `Genre: ${topFive[2]['Genre']}
          Platform: ${topFive[2]['Platform']}
          Year: ${topFive[2]['Year']}
          Sales: ${topFive[2]['Global_Sales']}M`;
          document.getElementById('list-rank4').innerText = `Genre: ${topFive[3]['Genre']}
          Platform: ${topFive[3]['Platform']}
          Year: ${topFive[3]['Year']}
          Sales: ${topFive[3]['Global_Sales']}M`;
          document.getElementById('list-rank5').innerText = `Genre: ${topFive[4]['Genre']}
          Platform: ${topFive[4]['Platform']}
          Year: ${topFive[4]['Year']}
          Sales: ${topFive[4]['Global_Sales']}M`;
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
