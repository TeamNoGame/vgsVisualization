// Read in each csv as a separate array
let ATVI = '';
let CCOEY = '';
let EA = '';
let KNMCY = '';
let MSFT = '';
let NTDOY = '';
let SEGA = '';
let SNE = '';
let SQNXF = '';
let THQN = '';
let TTWO = '';
let UBIPA = '';

// TODO fix date parsing
function readFiles() {
  jQuery.get('./data/ATVI.csv', function (txt) {
    ATVI = txt;
  }).done(function () {
    ATVI = dataCleaning(ATVI);
    console.log(ATVI)
  });

  jQuery.get('./data/CCOEY.csv', function (txt) {
    CCOEY = txt;
  }).done(function () {
    CCOEY = dataCleaning(CCOEY);
    console.log(CCOEY)
  });

  jQuery.get('./data/EA.csv', function (txt) {
    EA = txt;
  }).done(function () {
    EA = dataCleaning(EA);
    console.log(EA)
  });

  jQuery.get('./data/KNMCY.csv', function (txt) {
    KNMCY = txt;
  }).done(function () {
    KNMCY = dataCleaning(KNMCY);
    console.log(KNMCY)
  });

  jQuery.get('./data/MSFT.csv', function (txt) {
    MSFT = txt;
  }).done(function () {
    MSFT = dataCleaning(MSFT);
    console.log(MSFT)
  });

  jQuery.get('./data/NTDOY.csv', function (txt) {
    NTDOY = txt;
  }).done(function () {
    NTDOY = dataCleaning(NTDOY);
    console.log(NTDOY)
  });

  jQuery.get('./data/SEGA.csv', function (txt) {
    SEGA = txt;
  }).done(function () {
    SEGA = dataCleaning(SEGA);
    console.log(SEGA)
  });

  jQuery.get('./data/SNE.csv', function (txt) {
    SNE = txt;
  }).done(function () {
    SNE = dataCleaning(SNE);
    console.log(SNE)
  });

  jQuery.get('./data/SQNXF.csv', function (txt) {
    SQNXF = txt;
  }).done(function () {
    SQNXF = dataCleaning(SQNXF);
    console.log(SQNXF)
  });

  jQuery.get('./data/THQN-B.ST.csv', function (txt) {
    THQN = txt;
  }).done(function () {
    THQN = dataCleaning(THQN);
    console.log(THQN)
  });

  jQuery.get('./data/TTWO.csv', function (txt) {
    TTWO = txt;
  }).done(function () {
    TTWO = dataCleaning(TTWO);
    console.log(TTWO)
  });

  jQuery.get('./data/UBI.PA.csv', function (txt) {
    UBIPA = txt;
  }).done(function () {
    UBIPA = dataCleaning(UBIPA);
    console.log(UBIPA)
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
    row['Date'] = new Date(row['Date']);
    row['Adj Close'] = parseFloat(row['Adj Close']);
    row['High'] = parseFloat(row['High']);
    row['Low'] = parseFloat(row['Low']);
    row['Open'] = parseFloat(row['Open']);
    row['Volume'] = parseInt(row['Volume']);
  }
  return stringData;
}

readFiles();
