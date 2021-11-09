/**
 * crmdata.ts
 */
export { };
const Customer = require("./model1/customer");
//constructor(custonerId: number, fristName: string, lastName: string, primiumClass: boolean)
const customerArray = [new Customer(10001, "Anna", "Smith", true),
new Customer(10002, "Bernardt", "Langer", false),
new Customer(10003, "Charles", "Hennesy", true)];


module.exports = customerArray;