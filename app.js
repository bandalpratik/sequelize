const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
require('dotenv').config()

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const parentSkuRoutes = require('./routes/parentSku')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(parentSkuRoutes)

app.use(errorController.get404);

const port = process.env.PORT || 3000

sequelize
  .sync()
  .then(result => {
    app.listen(port, () => console.log(`Running on port ${port}`));
  })
  .catch(err => {
    console.log(err);
  });
