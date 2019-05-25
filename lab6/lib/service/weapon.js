"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weapon = function () {
    function Weapon(name, type, ammo, automatic) {
        _classCallCheck(this, Weapon);

        this._name = name;
        this._type = type;
        this._ammo = ammo;
        this._automatic = automatic;
    }

    _createClass(Weapon, [{
        key: "getDetails",
        value: function getDetails() {
            return "Name: " + this._name + ", Type: " + this._type + ", Ammunition: " + this._ammo + ", Automatic: " + this._automatic;
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            this._name = value;
        }
    }, {
        key: "type",
        get: function get() {
            return this._type;
        },
        set: function set(value) {
            this._type = value;
        }
    }, {
        key: "ammo",
        get: function get() {
            return this._ammo;
        },
        set: function set(value) {
            this._ammo = value;
        }
    }, {
        key: "automatic",
        get: function get() {
            return this._automatic;
        },
        set: function set(value) {
            this._automatic = value;
        }
    }]);

    return Weapon;
}();

exports.default = Weapon;

var Shotgun = exports.Shotgun = function (_Weapon) {
    _inherits(Shotgun, _Weapon);

    function Shotgun(name, type, ammo, automatic, kickback) {
        _classCallCheck(this, Shotgun);

        var _this = _possibleConstructorReturn(this, (Shotgun.__proto__ || Object.getPrototypeOf(Shotgun)).call(this, name, type, ammo, automatic));

        _this._kickback = kickback;
        return _this;
    }

    _createClass(Shotgun, [{
        key: "kickback",
        get: function get() {
            return this.kickback;
        },
        set: function set(value) {
            this._kickback = value;
        }
    }]);

    return Shotgun;
}(Weapon);

var MachineGun = exports.MachineGun = function (_Weapon2) {
    _inherits(MachineGun, _Weapon2);

    function MachineGun(name, type, ammo, automatic, shootingSpeed) {
        _classCallCheck(this, MachineGun);

        var _this2 = _possibleConstructorReturn(this, (MachineGun.__proto__ || Object.getPrototypeOf(MachineGun)).call(this, name, type, ammo, automatic));

        _this2._shootingSpeed = shootingSpeed;
        return _this2;
    }

    _createClass(MachineGun, [{
        key: "shootingSpeed",
        get: function get() {
            return this.shootingSpeed;
        },
        set: function set(value) {
            this._shootingSpeed = value;
        }
    }]);

    return MachineGun;
}(Weapon);