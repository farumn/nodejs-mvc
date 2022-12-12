const { requireModel } = require('../config/app.js');

exports.index = (req, res) => {
  res.render('index', {
    layout: 'layout/main_layout.ejs',
    title: 'Hello World!',
  });
}