//Q1.Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself.bankAccount.money);
console.log(myself);
/////////////////////////////////////
//OR
var bankAccount2 = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself2 = {
    name: "John",
    bankAccount2: bankAccount2,
    hobbies: ["Violin", "Cooking"]
};
myself2.bankAccount2.deposit(5000);
console.log("this is the second option ");
console.log(myself2.bankAccount2.money);
console.log(myself2);
/* Exercise 03
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.*/
var Car = /** @class */ (function () {
    // name: string;
    // acceleration: number;
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
car.accelerate(60);
car.accelerate(60);
console.log(car.acceleration);
/**
 * ## Exercise 04
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.

 */
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 20;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
var rect = /** @class */ (function () {
    function rect(width, length) {
        this.width = width;
        this.length = length;
    }
    rect.prototype.calaAraea = function () {
        return this.width * this.length;
    };
    return rect;
}());
