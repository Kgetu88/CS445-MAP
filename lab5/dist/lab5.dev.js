"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * testing the number is prime or not in Asynchronous(promise)
 * @param {*} num 
 * @returns 
 */
var isprime = function isprime(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) reject({
          prime: false
        });
      }

      resolve({
        prime: num > 1
      });
    }, 5000);
  });
};

console.log('start');
isprime(2).then(function (result) {
  return console.log(result);
})["catch"](function (error) {
  return console.log(error);
});
console.log('end'); //Q2  removes all duplicates for any array asynchornously
//  function removeDuplication(array){
//      let uniquAarry=[];
//      for(let i=0;i<array.length;i++){
//          if(!uniquAarry.includes(array[i])){
//              uniquAarry.push(array[i]);
//          }
//      }
//      console.log(`[${uniquAarry}]`);
//  }
//  let arr=[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
//  console.log(`start`);
//  setTimeout(removeDuplication,7000,arr);
//  console.log(`end`);
//  Array.prototype.removeDuplicatesAsync=async function(){
//      console.log(await[...new Set[this]]);
//  }
//  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
//or in  promise 

Array.prototype.removeDuplicatesAsync = function _callee() {
  var arr;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          arr = this;
          new promise(function (resolve, reject) {
            resolve(_toConsumableArray(new Set(arr)));
          }).then(console.log);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}[(4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2)].removeDuplicatesAsync();