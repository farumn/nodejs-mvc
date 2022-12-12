const { requireModel } = require('../config/app.js');

exports.index = (req, res) => {
  res.render('index');
}