const express = require("express");
const path = require('path');
const expressLayouts = require('express-ejs-layouts')


const configViewEngine = (app) => {
  app.use(expressLayouts)
  app.set('views', path.join('./src', 'views'));
  app.set('layout', 'layout/index.ejs');
  app.set('view engine', 'ejs');
  //app.use(express.static('../../','public'));


};

module.exports = configViewEngine;