const routes = require('./routes/web.js');
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayout);

app.use((req, res, next) => { routes.routing(app, req, res, next) });

app.listen(port, () => {
  console.log(`Server sedang berjalan pada port ${port}`);
});
