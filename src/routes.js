const employeeApi = require('./api/employee');

module.exports = function () {
  return {
    '/api/employee': employeeApi(),
  };
};
