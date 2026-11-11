const empController = require('../controllers/empController');
const express = require('express');
const route = express.Router();
route.post('/add-emp',empController.createEmployee);
route.get('/all-emp',empController.getAllEmployees);
module.exports = route;