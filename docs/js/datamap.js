var datamap = new Datamap({
  element: document.getElementById('datamap'),
  projection: 'mercator',
  fills: {
    LOW: '#9dc183',
    MED: '#5e734e',
    HIGH: '#1f261a',
    UNKNOWN: '#302',
    defaultFill: '#f7e4be'
  },
  data: {
    USA: {
      fillKey: 'LOW',
      numberOfThings: 300
    },
    JPN: {
      fillKey: 'HIGH',
      numberOfThings: 5000
    },
    DEU: {
      fillKey: 'MED',
      numberOfThings: 500
    },
    FRA: {
      fillKey: 'MED',
      numberOfThings: 500
    },
    GBR: {
      fillKey: 'MED',
      numberOfThings: 500
    }
  }
});