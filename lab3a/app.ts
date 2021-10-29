


function calculateAverage(array: number[]) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return `The Average of  ${array} is ${(sum / array.length).toFixed(2)}`;
}
console.log(calculateAverage([17, 9, 4, 82, 15, 36]));
console.log(calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]));

enum taxPayroll {
    FICA = 10,
    STATE = 5,
    MEDICARE = 12,
}

console.log(taxPayroll.FICA, taxPayroll.STATE, taxPayroll.MEDICARE);
