const cust: customerArray[] = require("./modell/datascore/customer");

class CustomerService {

    public async getCustomerByid(customerid: number) {
        for (let emp of cust) {
            if (emp.getCustonerId() == customerid) {
                return emp;
            }
        }
        throw new Error(" customer is not Found");

    }
}