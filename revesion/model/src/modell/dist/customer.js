var Customer = /** @class */ (function () {
    function Customer(custonerId, fristName, lastName, primiumClass) {
        this.custonerId = custonerId;
        this.fristName = fristName;
        this.lastName = lastName;
        this.primiumClass = primiumClass;
    }
    Customer.prototype.toString = function () {
        return "{Customer ID: " + this.custonerId + ",First Name:" + this.fristName + ",Last Name:" + this.lastName + ",primiumClass:" + this.primiumClass;
    };
    Customer.prototype.setCustonerId = function (custonerId) {
        this.custonerId = custonerId;
    };
    Customer.prototype.getCustonerId = function () {
        return this.custonerId;
    };
    Customer.prototype.setFristName = function (fristName) {
        this.fristName = fristName;
    };
    Customer.prototype.getFristName = function () {
        return this.fristName;
    };
    Customer.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setPrimiumClass = function (primiumClass) {
        this.primiumClass = primiumClass;
    };
    Customer.prototype.PrimiumClass = function () {
        return this.primiumClass;
    };
    return Customer;
}());
module.exports = Customer;
