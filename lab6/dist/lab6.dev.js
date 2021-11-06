"use strict";

/**Q1
 *  create a new function named `isPrimeAsync` which use async&await keywords to resolve the `isPrime` function.
 */
var isprime = function isprime(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
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

function isPrimeAsync(num) {
  var result;
  return regeneratorRuntime.async(function isPrimeAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(isprime(num));

        case 3:
          result = _context.sent;
          console.log(result);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

console.log('start');
isPrimeAsync(7);
console.log('end');
/*Q2
Create a method named `removeDuplicatesAsync` which works only for Array types and removes all duplicates for any array asynchornously. 
**You MUST use async & await** */

Array.prototype.removeDuplicatesAsync = function _callee() {
  var theArray, processDupsRemoval, output;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          theArray = this;

          processDupsRemoval = function processDupsRemoval(arr) {
            var noDups, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e;

            return regeneratorRuntime.async(function processDupsRemoval$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    noDups = [];
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context2.prev = 4;

                    for (_iterator = theArray[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      e = _step.value;
                      if (noDups.indexOf(e) === -1) noDups.push(e);
                    }

                    _context2.next = 12;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](4);
                    _didIteratorError = true;
                    _iteratorError = _context2.t0;

                  case 12:
                    _context2.prev = 12;
                    _context2.prev = 13;

                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                      _iterator["return"]();
                    }

                  case 15:
                    _context2.prev = 15;

                    if (!_didIteratorError) {
                      _context2.next = 18;
                      break;
                    }

                    throw _iteratorError;

                  case 18:
                    return _context2.finish(15);

                  case 19:
                    return _context2.finish(12);

                  case 20:
                    return _context2.abrupt("return", noDups);

                  case 21:
                  case "end":
                    return _context2.stop();
                }
              }
            }, null, null, [[4, 8, 12, 20], [13,, 15, 19]]);
          };

          _context3.next = 4;
          return regeneratorRuntime.awrap(processDupsRemoval(theArray));

        case 4:
          output = _context3.sent;
          console.log(output);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, null, this);
};

console.log("start");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log("end");