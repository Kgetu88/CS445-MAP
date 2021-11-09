
export { };
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
        return `{Customer ID: ${this.custonerId},First Name:${this.fristName},Last Name:${this.lastName},primiumClass:${thsi.getPrimiumClass()}}`;

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
    public setPrimiumClass(primiumClass: boolean): void {
        this.primiumClass = primiumClass;
    }

    public getPrimiumClass(): boolean {
        return this.primiumClass;
    }


}

module.exports = Customer;