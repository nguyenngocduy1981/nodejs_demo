const Promise = require('bluebird');
const _ = require('lodash');

const employees = [
    {
      "userId": "1",
      "jobTitleName": "Developer",
      "firstName": "Romin",
      "lastName": "Irani",
      "preferredFullName": "Romin Irani",
      "employeeCode": "E1",
      "region": "CA",
      "phoneNumber": "408-1234567",
      "emailAddress": "romin.k.irani@gmail.com"
    },
    {
      "userId": "2",
      "jobTitleName": "Developer",
      "firstName": "Neil",
      "lastName": "Irani",
      "preferredFullName": "Neil Irani",
      "employeeCode": "E2",
      "region": "CA",
      "phoneNumber": "408-1111111",
      "emailAddress": "neilrirani@gmail.com"
    },
    {
      "userId": "3",
      "jobTitleName": "Program Directory",
      "firstName": "Tom",
      "lastName": "Hanks",
      "preferredFullName": "Tom Hanks",
      "employeeCode": "E3",
      "region": "CA",
      "phoneNumber": "408-2222222",
      "emailAddress": "tomhanks@gmail.com"
    }
  ];


module.exports.findAll = function () {
  return new Promise((resolve, reject) => {
    resolve(employees);
  });
};

module.exports.findById = function (id) {
  return new Promise((resolve, reject) => {
    resolve(employees.find(x => x.userId === id)) || {};
  });
};