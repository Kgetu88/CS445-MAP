
class Customer {
    private custonerId: number;
    private fristName: string;
    private lastName: string;
    private primiumClass?: any;
    constructor(custonerId: number, fristName: string, lastName: string, primiumClass: boolean) {

        this.custonerId = custonerId;
        this.fristName = fristName;
        this.lastName = lastName;
        this.primiumClass = primiumClass;
    }

    public toString() {
        return `{Customer ID: ${this.custonerId},First Name:${this.fristName},Last Name:${this.lastName},primiumClass:${this.primiumClass}`;

    }
    public setCustonerId(custonerId: number): void {
        this.custonerId = custonerId;
    }

    public getCustonerId(): number {
        return this.custonerId;
    }

    public setFristName(fristName: string): void {
        this.fristName = fristName;
    }
    public getFristName(): string {
        return this.fristName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getLastName(): string {
        return this.lastName;
    }
    public setPrimiumClass(primiumClass: any): void {
        this.primiumClass = primiumClass;
    }

    public PrimiumClass(): any {
        return this.primiumClass;
    }


}

module.exports = Customer;