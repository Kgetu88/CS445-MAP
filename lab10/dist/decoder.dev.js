"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Implement Decorator pattern to add a logger to any object (additional class is needed).
 *  A logger method will log a message to the `console`.

 */
var User =
/*#__PURE__*/
function () {
  function User(name) {
    _classCallCheck(this, User);

    this.name = name;
  }

  _createClass(User, [{
    key: "logger",
    value: function logger() {
      console.log("Name: " + this.name);
    }
  }]);

  return User;
}();

var DecoratedUser =
/*#__PURE__*/
function () {
  function DecoratedUser(user, street, city) {
    _classCallCheck(this, DecoratedUser);

    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
  }

  _createClass(DecoratedUser, [{
    key: "logger",
    value: function logger() {
      console.log("Decoreter User is " + this.name + " ," + this.street + "," + this.city);
    }
  }]);

  return DecoratedUser;
}();

var user = new User("Kelly");
var decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();