"use strict";
exports.__esModule = true;
var Customer = require("./dist/crmdata");
var customerArray = [new Customer(10001, "Anna", "Smith", true),
    new Customer(10002, "Bernardt", "Langer", false),
    new Customer(10003, "Charles", "Hennesy", true)];
module.exports = customerArray;
