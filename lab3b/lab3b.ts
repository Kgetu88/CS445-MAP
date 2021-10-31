
//Q1.Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.


class University {
    name: string;
    dept: string;
    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}


let miu = new University("MIU", "MSD");
miu.graduation(2021);


//Q2.Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.

type bankAccount = {
    money: number,
    deposit(value: number): void;
};
let bankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
}

type myself = {
    name: string,
    bankAccount: bankAccount,
    hobbies: string[];
};


let myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself.bankAccount.money);
console.log(myself);




/* Exercise 03
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.*/


class Car {
    name: string;
    acceleration: number;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}


let car = new Car("BMW");
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

type baseObject = {
    width: number,
    length: number

};
let baseObject = {
    width: 0,
    length: 0,
};


let rectangle = Object.create(baseObject);

rectangle.width = 5;
rectangle.length = 20;

rectangle.calcSize = function () {
    return this.width * this.length;
};

console.log(rectangle.calcSize());