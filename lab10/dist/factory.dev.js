"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Regular = function Regular() {
  _classCallCheck(this, Regular);

  this.lumen = "60 Watt";
  this.age = "1 year";
  this.color = "none";
};

var Energy = function Energy(color) {
  _classCallCheck(this, Energy);

  this.lumen = "35 Watt";
  this.age = "10 year";
  this.color = color;
};

var Factory =
/*#__PURE__*/
function () {
  function Factory() {
    _classCallCheck(this, Factory);
  }

  _createClass(Factory, [{
    key: "createBulb",
    value: function createBulb(type, color) {
      var bulbtype;

      if (type === "regular") {
        bulbtype = new Regular();
      } else if (type === "energy") {
        bulbtype = new Energy(color);
      }

      bulbtype.type = type;

      bulbtype.show = function () {
        console.log(this.type + " :lumen " + this.lumen + " Last " + this.age + " " + this.color);
      };

      return bulbtype;
    }
  }]);

  return Factory;
}();

var bulbs = [];
var factory = new Factory();
bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));

for (var i = 0, len = bulbs.length; i < len; i++) {
  console.log(bulbs[i].show());
}