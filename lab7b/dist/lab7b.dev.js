'use strict';

var employeedata = function employeedata() {
  fetch("https://randomuser.me/api/?results=5").then(function (response) {
    return response.json();
  }).then(function (result) {
    return employeesData(result);
  });
};

var employeesData = function employeesData(empCollection) {
  var empImg = empCollection.results[0].picture.medium;
  document.getElementById("img1").src = empImg;
};