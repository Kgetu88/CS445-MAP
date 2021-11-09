

export { };
const elemnt: CustomerService = requrire("./service/customer");
const Customer = require("./model/customer");
const custom: Customer[] = require("./datasorce/crmdata");

custom.forEach(elemnt => { console.log(elemnt.toString()) });

const findCustomer = async (custId: number) => {
    let cust = await elemnt.getCustomerByid(custId);
    console.log(cust.toString());
}




findCustomer(1001);
findCustomer(100)
    .catch((error) => console.error(error.message))
    .finally(() => console.log("Finished The task"));



