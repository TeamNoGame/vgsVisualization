function makeTraces() {
  // console.log(vgsData);
  let rank = [], name = [], platform = [], year = [], genre = [], publisher = ["Activision", "Atari", "Bethesda Softworks", "Electronic Arts", "Microsoft Game Studios", "Nintendo", "Sega", "Sony Computer Entertainment", "SquareSoft", "Take-Two Interactive", "Ubisoft"], NAsales = [], EUsales = [],
      JPsales = [], otherSales = [], globalSales = [], allPublishers = [], pubRankings = [];
// yearly sales (graph1)
  let yearlyNA = [], yearlyEU = [], yearlyJP = [], yearlyOther = [], yearlyGlobal = [];
// for x: year traces (graph1)
  let flatYears = [];
  let publisherSales = [[],[],[],[],[],[],[],[],[],[],[]];
  for (let i = 1980; i <= 2017; i++) {
    flatYears.push(i);
    yearlyNA.push(0);
    yearlyJP.push(0);
    yearlyEU.push(0);
    yearlyOther.push(0);
    yearlyGlobal.push(0);
    for (let j = 0; j < publisherSales.length; j++){
      publisherSales[j].push(0);
    }
  }

  // get publisher then pick 5 most popular games
  let selectedPub = "Nintendo";
  let topGames = [];

  // sales by genre
  let genreNA = [], genreEU = [], genreJP = [], genreOther = [], genreGlobal = [];
  for(let i = 0; i<16; i++){
    genreNA.push(0);
    genreEU.push(0);
    genreJP.push(0);
    genreOther.push(0);
    genreGlobal.push(0);
  }

  console.log("vgsdata[0]: " + vgsData[0].Global_Sales);

  // parse stuff
  for (let i = 0; i < vgsData.length; i++) {
    const row = vgsData[i];

    // for bar chart
    if ((topGames.length < 10) && (row['Publisher'] == selectedPub)) {
      topGames.push(row);
    }
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
    // find all unique platforms
    if(!platform.includes(row['Platform'])) platform.push(row['Platform']);
    // find all unique genres
    if(!genre.includes(row['Genre'])) genre.push(row['Genre']);
    //find all unique publishers
    if(!allPublishers.includes(row['Publisher'])) {
      allPublishers.push(row['Publisher']);
      pubRankings.push({Publisher: row['Publisher'], Global_Sales: 0});
    }

    pubRankings[allPublishers.indexOf(row['Publisher'])].Global_Sales += row['Global_Sales'];


    // make data for top 11 publishers
    if(publisher.includes(row['Publisher'])){
      publisherSales[publisher.indexOf(row['Publisher'])][row['Year'] - 1980] += (row['NA_Sales'] + row['EU_Sales'] + row['JP_Sales'] + row['Other_Sales'] + row['Global_Sales'])
    }

    // make arrays for sales by genre by region
    genreNA[genre.indexOf(row['Genre'])] += row['NA_Sales'];
    genreEU[genre.indexOf(row['Genre'])] += row['EU_Sales'];
    genreJP[genre.indexOf(row['Genre'])] += row['JP_Sales'];
    genreOther[genre.indexOf(row['Genre'])] += row['Other_Sales'];
    genreGlobal[genre.indexOf(row['Genre'])] += row['Global_Sales'];

    // make arrays for sales by year by region
    yearlyNA[row['Year'] - 1980] += row['NA_Sales'];
    yearlyEU[row['Year'] - 1980] += row['EU_Sales'];
    yearlyJP[row['Year'] - 1980] += row['JP_Sales'];
    yearlyOther[row['Year'] - 1980] += row['Other_Sales'];
    yearlyGlobal[row['Year'] - 1980] += row['Global_Sales'];
  }

  platform.sort();
  //genre.sort();
  publisher.sort();

  pubRankings.sort(compare);

  function compare(a, b){
    if (a.Global_Sales < b.Global_Sales) return 1;
    if (a.Global_Sales > b.Global_Sales) return -1;
    return 0;
  }

  // console.log(platform, genre, publisher);
  // console.log(flatYears);
  // console.log(genreNA, genreEU, genreJP, genreOther, genreGlobal);
  // console.log('THIS IS THE TEST ARRAY', publisherSales);
  // console.log(allPublishers, pubRankings);


//console.log(yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal);

//console.log(rank, name, platform, year, genre, publisher, NAsales, EUsales, JPsales, otherSales, globalSales);

  // for (let i=0; i<topGamesNames.length; i++) {
  for (let i=0; i<topGames.length; i++) {
    // console.log("topGames[" + i + "].rank + name: " + topGamesNames[i] + " " + topGamesSales[i]);
    console.log("topGames[" + i + "].name: " + topGames[i].Name);
  }


  buildBar(selectedPub, topGames);
  // buildGraph1(flatYears, yearlyNA, yearlyEU, yearlyJP, yearlyOther, yearlyGlobal);
  // buildGraph2(flatYears, publisherSales);
}

function buildBar(selectedPub, topGames) {
  let barTrace = {
    x: topGames.map(x => x.Name),
    y: topGames.map(x => x.Global_Sales),
    // marker:{
    //   color: ['rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
    // },
    type: 'bar'
  };

  let data = [barTrace];

  let layout = {
    title: selectedPub + "\'s Top 10 Games"
  };

  Plotly.newPlot('bar', data, layout);
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
  // console.log(data);
  // Plotly.newPlot('graph1', data, { barmode: 'group', title: 'Sales by Release Date by Region in Millions', responsive: true});
}

function buildGraph2(flatYears, publisherSales){
  const activision = {
    x: flatYears,
    y: publisherSales[0],
    name: 'Activision',
    type: 'bar'
  };
  const atari = {
    x: flatYears,
    y: publisherSales[1],
    name: 'Atari',
    type: 'bar'
  };
  const bethesda = {
    x: flatYears,
    y: publisherSales[2],
    name: 'Bethesda',
    type: 'bar'
  };
  const EA = {
    x: flatYears,
    y: publisherSales[3],
    name: 'Electronic Arts',
    type: 'bar'
  };
  const microsoft = {
    x: flatYears,
    y: publisherSales[4],
    name: 'Microsoft',
    type: 'bar'
  };
  const nintendo = {
    x: flatYears,
    y: publisherSales[5],
    name: 'Nintendo',
    type: 'bar'
  };
  const sega = {
    x: flatYears,
    y: publisherSales[6],
    name: 'Sega',
    type: 'bar'
  };
  const sony = {
    x: flatYears,
    y: publisherSales[7],
    name: 'Sony',
    type: 'bar'
  };
  const squaresoft = {
    x: flatYears,
    y: publisherSales[8],
    name: 'SquareSoft',
    type: 'bar'
  };
  const take2 = {
    x: flatYears,
    y: publisherSales[9],
    name: 'Take-Two Interactive',
    type: 'bar'
  };
  const ubisoft = {
    x: flatYears,
    y: publisherSales[10],
    name: 'Ubisoft',
    type: 'bar'
  };
  const data = [activision, atari, bethesda, EA, microsoft, nintendo, sega, sony, squaresoft, take2, ubisoft];
  // Plotly.newPlot('graph2', data, { barmode: 'group', title: 'Sales Top-Selling Publishers', responsive: true});
}
