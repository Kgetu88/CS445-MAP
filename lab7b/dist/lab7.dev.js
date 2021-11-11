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
  var empfName = empCollection.results[0].name.first + " " + empCollection.results[0].name.last;
  document.getElementById("emp1").innerText = empfName;
  var phone = empCollection.results[0].phone;
  document.getElementById("phone1").innerText = "Phone : " + phone;
  var email = empCollection.results[0].email;
  document.getElementById("email1").innerText = email; ////////

  var empImg1 = empCollection.results[1].picture.medium;
  document.getElementById("img2").src = empImg1;
  var empfName1 = empCollection.results[1].name.first + " " + empCollection.results[1].name.last;
  document.getElementById("emp2").innerText = empfName1;
  var phone1 = empCollection.results[1].phone;
  document.getElementById("phone2").innerText = "Phone : " + phone1;
  var email1 = empCollection.results[1].email;
  document.getElementById("email2").innerText = email1; //

  var empImg2 = empCollection.results[2].picture.medium;
  document.getElementById("img3").src = empImg2;
  var empfName2 = empCollection.results[2].name.first + " " + empCollection.results[2].name.last;
  document.getElementById("emp3").innerText = empfName2;
  var phone2 = empCollection.results[2].phone;
  document.getElementById("phone3").innerText = "Phone : " + phone2;
  var email2 = empCollection.results[2].email;
  document.getElementById("email3").innerText = email2; //

  var empImg3 = empCollection.results[3].picture.medium;
  document.getElementById("img4").src = empImg3;
  var empfName3 = empCollection.results[3].name.first + " " + empCollection.results[3].name.last;
  var bold = document.getElementById("emp4").innerText = empfName3;
  var phone3 = empCollection.results[3].phone;
  document.getElementById("phone4").innerText = "Phone : " + phone3;
  var email3 = empCollection.results[3].email;
  document.getElementById("email4").innerText = email3; //

  var empImg4 = empCollection.results[4].picture.medium;
  document.getElementById("img5").src = empImg4;
  var empfName4 = empCollection.results[4].name.first + " " + empCollection.results[4].name.last;
  document.getElementById("emp5").innerText = empfName4;
  var phone4 = empCollection.results[4].phone;
  document.getElementById("phone5").innerText = "Phone : " + phone4;
  var email4 = empCollection.results[4].email;
  document.getElementById("email5").innerText = email4;
};

function refersh() {
  employeedata();
}

employeedata();