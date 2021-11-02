//it is tuple form
var tupleform = function (numbers) {
    var result = [numbers, 0];
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    result[1] = (sum / numbers.length);
    return result;
};
//aray form
function calculateAverage(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element_1 = array_1[_i];
        sum += element_1;
    }
    return "The Average of  [" + array + "] is " + (sum / array.length).toFixed(2);
}
console.log(calculateAverage([17, 9, 4, 82, 15, 36]));
console.log(calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]));
var array = [17, 9, 4, 82, 15, 36];
var tuplyarray = tupleform(array);
console.log("the average of [" + tuplyarray[0] + "] is " + tuplyarray[1].toFixed(2));
var Tax;
(function (Tax) {
    Tax[Tax["FICA"] = 10] = "FICA";
    Tax[Tax["STATE"] = 5] = "STATE";
    Tax[Tax["MEDICARE"] = 12] = "MEDICARE";
})(Tax || (Tax = {}));
var PayCheck = /** @class */ (function () {
    function PayCheck(grossPay, ficaTax, statTax, medicarTax) {
        this.grossPay = 100;
        this.grossPay = grossPay;
        this.ficaTax = ficaTax;
        this.statTax = statTax;
        this.medicarTAx = medicarTax;
    }
    PayCheck.prototype.toString = function () {
        return "The GrossPay :" + this.grossPay + ",Taxes:[" + this.ficaTax + "," + this.statTax + "," + this.medicarTAx + "]";
    };
    return PayCheck;
}());
var element = new PayCheck(1000, Tax.FICA, Tax.STATE, Tax.MEDICARE);
console.log(element.toString());
