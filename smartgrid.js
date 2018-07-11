const smartgrid = require('smart-grid');

const settings = {
  outputStyle: 'less',
  columns: 12,
  offset: '30px',
  container: {
    maxWidth: '1170px',
    fields: '15px'
  },
  breakPoints: {
    md: {
      width: "1170px",
      fields: "30px"
    },
    sm: {
      width: "768px",
      fields: "20px"
    },
    xs: {
      width: "480px",
      fields: "10px"
    }
  },
  properties: [
    'justify-content'
  ]
};

smartgrid('./src/assets/styles/partials', settings);