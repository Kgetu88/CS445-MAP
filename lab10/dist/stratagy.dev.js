"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Implement Strategy pattern to choose between different logging algorithms, choosing between:
* `console.info()`
* `console.warn()`
* `console.error()`
* `console.table()`  *accepts an array of objects*


**When you finish, you can use the code below to test:**
```javascript
const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);
 */
var UPS =
/*#__PURE__*/
function () {
  function UPS() {
    _classCallCheck(this, UPS);
  }

  _createClass(UPS, [{
    key: "calculate",
    value: function calculate(product) {
      return "$45.95";
    }
  }]);

  return UPS;
}();

;

var USPS =
/*#__PURE__*/
function () {
  function USPS() {
    _classCallCheck(this, USPS);
  }

  _createClass(USPS, [{
    key: "calculate",
    value: function calculate(product) {
      return "$39.40";
    }
  }]);

  return USPS;
}();

;

var Fedex =
/*#__PURE__*/
function () {
  function Fedex() {
    _classCallCheck(this, Fedex);
  }

  _createClass(Fedex, [{
    key: "calculate",
    value: function calculate(product) {
      return "$43.20";
    }
  }]);

  return Fedex;
}();

;