let ATVIdate = [], ATVIstock = [], CCOEYdate = [], CCOEYstock = [], EAdate = [], EAstock = [], KNMCYdate = [], KNMCYstock = [], MSFTdate = [], MSFTstock = [];
let NTDOYdate = [], NTDOYstock = [], SEGAdate = [], SEGAstock = [], SNEdate = [], SNEstock = [], SQNXFdate = [], SQNXFstock = [], THQNdate = [], THQNstock = [], TTWOdate = [], TTWOstock = [], UBIPAdate = [], UBIPAstock = [];

function predictFuture(ATVI, CCOEY, EA, KNMCY, MSFT, NTDOY, SEGA, SNE, SQNXF, THQN, TTWO, UBIPA) {
  for(let i = 0; i < ATVI.length; i++){
    const row = ATVI[i];
    ATVIdate.push(row['Date']);
    ATVIstock.push(row['Close']);
  }
  for(let i = 0; i < CCOEY.length; i++){
    const row = CCOEY[i];
    CCOEYdate.push(row['Date']);
    CCOEYstock.push(row['Close']);
  }
  for(let i = 0; i < EA.length; i++){
    const row = EA[i];
    EAdate.push(row['Date']);
    EAstock.push(row['Close']);
  }
  for(let i = 0; i < KNMCY.length; i++){
    const row = KNMCY[i];
    KNMCYdate.push(row['Date']);
    KNMCYstock.push(row['Close']);
  }
  for(let i = 0; i < MSFT.length; i++){
    const row = MSFT[i];
    MSFTdate.push(row['Date']);
    MSFTstock.push(row['Close']);
  }
  for(let i = 0; i < NTDOY.length; i++){
    const row = NTDOY[i];
    NTDOYdate.push(row['Date']);
    NTDOYstock.push(row['Close']);
  }
  for(let i = 0; i < SEGA.length; i++){
    const row = SEGA[i];
    SEGAdate.push(row['Date']);
    SEGAstock.push(row['Close']);
  }
  for(let i = 0; i < SNE.length; i++){
    const row = SNE[i];
    SNEdate.push(row['Date']);
    SNEstock.push(row['Close']);
  }
  for(let i = 0; i < SQNXF.length; i++){
    const row = SQXNF[i];
    SQNXFdate.push(row['Date']);
    SQNXFstock.push(row['Close']);
  }
  for(let i = 0; i < THQN.length; i++){
    const row = THQN[i];
    THQNdate.push(row['Date']);
    THQNstock.push(row['Close']);
  }
  for(let i = 0; i < TTWO.length; i++){
    const row = TTWO[i];
    TTWOdate.push(row['Date']);
    TTWOstock.push(row['Close']);
  }
  for(let i = 0; i < UBIPA.length; i++){
    const row = CCOEY[i];
    UBIPAdate.push(row['Date']);
    UBIPAstock.push(row['Close']);
  }

  showHistory('ATVI', ATVIdate, ATVIstock);
  showHistory('CCOEY', CCOEYdate, CCOEYstock);
  showHistory('EA', EAdate, EAstock);
  showHistory('KNMCY', KNMCYdate, KNMCYstock);
  showHistory('MSFT', MSFTdate, MSFTstock);
  showHistory('NTDOY', NTDOYdate, NTDOYstock);
  showHistory('SEGA', SEGAdate, SEGAstock);
  showHistory('SNE', SNEdate, SNEstock);
  showHistory('SQNXF', SQNXFdate, SQNXFstock);
  showHistory('THQN', THQNdate, THQNstock);
  showHistory('TTWO', TTWOdate, TTWOstock);
  showHistory('UBIPA', UBIPAdate, UBIPAstock);

}

function showHistory(name, dates, values){
  const data = {
    x: dates,
    y: values,
    name: name,
    type: 'line'
  };
  Plotly.newPlot(name, data, { title: `${name} Stock History`, responsive: true});
}

predictFuture(ATVI, CCOEY, EA, KNMCY, MSFT, NTDOY, SEGA, SNE, SQNXF, THQN, TTWO, UBIPA);

