function calculateAverage(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        sum += element;
    }
    return "The Average of  " + array + " is " + (sum / array.length).toFixed(2);
}
console.log(calculateAverage([17, 9, 4, 82, 15, 36]));
console.log(calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]));
var taxPayroll;
(function (taxPayroll) {
    taxPayroll[taxPayroll["FICA"] = 10] = "FICA";
    taxPayroll[taxPayroll["STATE"] = 5] = "STATE";
    taxPayroll[taxPayroll["MEDICARE"] = 12] = "MEDICARE";
})(taxPayroll || (taxPayroll = {}));
console.log(taxPayroll.FICA, taxPayroll.STATE, taxPayroll.MEDICARE);
