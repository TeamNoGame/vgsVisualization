function makeTraces() {
  console.log(vgsData);
  var rank = [], name = [], platform = [], year = [], genre = [], publisher = [], NAsales = [], EUsales = [],
      JPsales = [], otherSales = [], globalSales = [];
// yearly sales
  var yearlyNA = [], yearlyEU = [], yearlyJP = [], yearlyOther = [], yearlyGlobal = [];
// for x: year traces
  var flatYears = [];
  for (var i = 1980; i <= 2020; i++) {
    flatYears.push({
      year: i,
      NAsales: 0,
      EUsales: 0,
      JPsales: 0,
      otherSales: 0,
      globalSales: 0
    });
  }

// parse stuff
  for (var i = 0; i < vgsData.length; i++) {
    var row = vgsData[i];
    /*
    // give every column its own array
    rank.push(row['Rank']);
    name.push(row['Name']);
    platform.push(row['Platform']);
    year.push(row['Year']);
    genre.push(row['Genre']);
    publisher.push(row['Publisher']);
    NAsales.push(row['NA_Sales']);
    EUsales.push(row['EU_Sales']);
    JPsales.push(row['JP_Sales']);
    otherSales.push(row['Other_Sales']);
    globalSales.push(row['"Global_Sales"']);

    // sum sales by region and year
    yearlyNA[row['Year']] += row['NA_Sales'];
    yearlyEU[row['Year']] += row['EU_Sales'];
    yearlyJP[row['Year']] += row['JP_Sales'];
    yearlyOther[row['Year']] += row['Other_Sales'];
    yearlyGlobal[row['Year']] += row['Global_Sales'];
    */

  }

//console.log(yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal);

//console.log(rank, name, platform, year, genre, publisher, NAsales, EUsales, JPsales, otherSales, globalSales);

  buildGraph1(flatYears, yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal);
}

function buildGraph1(flatYears, NAsales, EUsales, JPsales, otherSales, globalSales) {
  var NAtrace = {
    x: flatYears,
    y: NAsales,
    name: 'NA Sales',
    type: 'bar'
  };
  var EUtrace = {
    x: flatYears,
    y: EUsales,
    name: 'EU Sales',
    type: 'bar'
  };
  var JPtrace = {
    x: flatYears,
    y: JPsales,
    name: 'JP Sales',
    type: 'bar'
  };
  var otherTrace = {
    x: flatYears,
    y: otherSales,
    name: 'Other Sales',
    type: 'bar'
  };
  var globalTrace = {
    x: flatYears,
    y: globalSales,
    name: 'Global Sales',
    type: 'bar'
  };
  var data = [NAtrace, EUtrace, JPtrace, otherTrace, globalTrace];
  Plotly.newPlot('graph1', data, { barmode: 'group' });
}
