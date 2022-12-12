const { requireModel } = require('../config/app.js');

const index = (req, res) => {
  res.render('index');
}

module.exports = { index };