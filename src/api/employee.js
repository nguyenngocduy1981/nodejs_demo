const employeeService = require('../service/employee-service');
const response = require('../util/response');
const jwtVerify = require('../middlewares/jwt-verify');
const express = require('express');
const routes = express.Router();

function getRoutes() {
  routes.use(jwtVerify);
  routes.get('/hello', sayHello);
  routes.get('/', getAllEmployees);
  routes.get('', getAllEmployees);

  routes.get('/:id', getEmployeeById);

  return routes;
}

module.exports = getRoutes;

function sayHello(req, res) {
  response.sendOk(res, {msg: "Hello " + new Date()});
}

function getEmployeeById(req, res) {
  let id = req.params.id;
  employeeService.findById(id).then((result) => {
    response.sendOk(res, result);
  }).catch((err) => {
    response.sendBadRequestError(res, err);
  });
}

function getAllEmployees(req, res) {
  employeeService.findAll().then((result) => {
    response.sendOk(res, result);
  }).catch((err) => {
    response.sendBadRequestError(res, err);
  });
}
