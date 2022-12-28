const express = require('express');
const Router = express.Router();

const Controller = require('../Controller/lanEngineController');

// controller 
Router.post('/change',Controller.translateWord)


module.exports = Router;