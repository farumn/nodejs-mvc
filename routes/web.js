const { requireController } = require('../config/app.js');
const HomeController = requireController('HomeController');

const routing = (app, req, res, next) => {
  app.get("/", (req, res) => { HomeController.index(req, res); });

  app.use((req, res) => {
    res.status(404);
    res.send('404')
  });
  
  next();
}

module.exports = {routing};