const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3306;

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes)

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});