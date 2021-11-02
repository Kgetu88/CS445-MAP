
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
/////////////////////////////////////
//OR
let bankAccount2: {
    money: number,
    deposit(value: number): void;
} = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
}


let myself2: {
    name: string,
    bankAccount2: typeof bankAccount2,
    hobbies: string[];
} = {
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


class Car {
    // name: string;
    // acceleration: number;

    constructor(public name: string, public acceleration: number = 0) {

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

let baseObject: {
    width: number,
    length: number

} = {
    width: 0,
    length: 0,
};



let rectangle: any = Object.create(baseObject);

rectangle.width = 5;
rectangle.length = 20;

rectangle.calcSize = function () {
    return this.width * this.length;
};

console.log(rectangle.calcSize());
//or
interface shap {
    width: number;
    length: number;
    calaAraea(): number;
}

class rect implements shap {


    constructor(public width: number, public length: number) {

    }

    calaAraea(): number {
        return this.width * this.length;
    }
}