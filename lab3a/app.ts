
//it is tuple form
let tupleform = function (numbers: number[]): [number[], number] {
    let result: [number[], number] = [numbers, 0];
    let sum: number = 0;

    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    result[1] = (sum / numbers.length);

    return result;
}

//aray form
function calculateAverage(array: number[]): any {
    let sum: number = 0;
    for (let element of array) {
        sum += element;
    }
    return `The Average of  [${array}] is ${(sum / array.length).toFixed(2)}`;
}


console.log(calculateAverage([17, 9, 4, 82, 15, 36]));
console.log(calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]));
const array = [17, 9, 4, 82, 15, 36];
const tuplyarray = tupleform(array);
console.log(`the average of [${tuplyarray[0]}] is ${tuplyarray[1].toFixed(2)}`);


enum Tax {
    FICA = 10,//if we don't Assign,  which passing start from 0;
    STATE = 5,
    MEDICARE = 12,
}
class PayCheck {
    grossPay: number = 100;
    ficaTax: Tax;
    statTax: Tax;
    medicarTAx: Tax;
    constructor(grossPay: number, ficaTax: number, statTax: number, medicarTax: number) {
        this.grossPay = grossPay;
        this.ficaTax = ficaTax;
        this.statTax = statTax;
        this.medicarTAx = medicarTax;
    }

    toString() {
        return `The GrossPay :${this.grossPay},Taxes:[${this.ficaTax},${this.statTax},${this.medicarTAx}]`
    }


}
let element = new PayCheck(1000, Tax.FICA, Tax.STATE, Tax.MEDICARE);
console.log(element.toString());