var vgsData = "";
function readFiles() {
  jQuery.get('./data/vgsales.csv', function (txt) {
    vgsData = txt;
  }).done(function () {
    vgsData = dataCleaning(vgsData);
    for (var i = 0; i < vgsData.length; i++) {
      var row = vgsData[i];
      row['Rank'] = parseInt(row['Rank']);
      row['Year'] = parseInt(row['Year']);
      row['NA_Sales'] = parseFloat(row['NA_Sales']);
      row['EU_Sales'] = parseFloat(row['EU_Sales']);
      row['JP_Sales'] = parseFloat(row['JP_Sales']);
      row['Other_Sales'] = parseFloat(row['Other_Sales']);
      row['Global_Sales'] = parseFloat(row['Global_Sales']);
    }
    vgsData.pop();
    doneLoadingData();
    makeTraces();
  });
}

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
  return dirtyObject;
}
