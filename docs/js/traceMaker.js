function makeTraces() {
  console.log(vgsData);
  let rank = [], name = [], platform = [], year = [], genre = [], publisher = [], NAsales = [], EUsales = [],
      JPsales = [], otherSales = [], globalSales = [];
// yearly sales
  let yearlyNA = [], yearlyEU = [], yearlyJP = [], yearlyOther = [], yearlyGlobal = [];
// for x: year traces
  let flatYears = [];
  for (let i = 1980; i <= 2020; i++) {
    flatYears.push(i);
    yearlyNA.push(0);
    yearlyJP.push(0);
    yearlyEU.push(0);
    yearlyOther.push(0);
    yearlyGlobal.push(0);

  }

  // parse stuff
  for (let i = 0; i < vgsData.length; i++) {
    const row = vgsData[i];
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
    globalSales.push(row['Global_Sales']);

    // sum sales by region and year
    yearlyNA[row['Year']] += row['NA_Sales'];
    yearlyEU[row['Year']] += row['EU_Sales'];
    yearlyJP[row['Year']] += row['JP_Sales'];
    yearlyOther[row['Year']] += row['Other_Sales'];
    yearlyGlobal[row['Year']] += row['Global_Sales'];
    */
    yearlyNA[row['Year'] - 1980] += row['NA_Sales'];
    yearlyEU[row['Year'] - 1980] += row['EU_Sales'];
    yearlyJP[row['Year'] - 1980] += row['JP_Sales'];
    yearlyOther[row['Year'] - 1980] += row['Other_Sales'];
    yearlyGlobal[row['Year'] - 1980] += row['Global_Sales'];
  }

  console.log(flatYears);

//console.log(yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal);

//console.log(rank, name, platform, year, genre, publisher, NAsales, EUsales, JPsales, otherSales, globalSales);

  buildGraph1(flatYears, yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal);
}

function buildGraph1(flatYears, yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal) {
  const NAtrace = {
    x: flatYears,
    y: yearlyNA,
    name: 'NA Sales',
    type: 'bar'
  };
  const EUtrace = {
    x: flatYears,
    y: yearlyEU,
    name: 'EU Sales',
    type: 'bar'
  };
  const JPtrace = {
    x: flatYears,
    y: yearlyJP,
    name: 'JP Sales',
    type: 'bar'
  };
  const otherTrace = {
    x: flatYears,
    y: yearlyOther,
    name: 'Other Sales',
    type: 'bar'
  };
  const globalTrace = {
    x: flatYears,
    y: yearlyGlobal,
    name: 'Global Sales',
    type: 'bar'
  };
  const data = [NAtrace, EUtrace, JPtrace, otherTrace, globalTrace];
  console.log(data);
  Plotly.newPlot('graph1', data, { barmode: 'group' });
}
