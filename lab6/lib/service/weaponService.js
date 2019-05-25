"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WeaponBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weapon = require("./weapon");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeaponBase = exports.WeaponBase = function () {
    function WeaponBase() {
        _classCallCheck(this, WeaponBase);

        this.weapons = [new _weapon.Weapon("Desert Eagle", "Firearm", 15, false), new _weapon.Shotgun("Mossberg", "Firearm", 6, false), new _weapon.MachineGun("Ak-47", "Firearm", 30, true, 6), new _weapon.MachineGun("Uzi", "Firearm", 40, true)];
    }

    _createClass(WeaponBase, [{
        key: "exists",
        value: function exists(weapon) {
            this.weapons.forEach(function (element) {
                if (element === weapon) return true;
            });
            return false;
        }
    }, {
        key: "getWeapons",
        value: function getWeapons() {
            return this.weapons;
        }
    }, {
        key: "removeWeapon",
        value: function removeWeapon(weapon) {
            var index = this.weapons.indexOf(weapon);
            this.weapons.splice(index, 1);
        }
    }, {
        key: "addWeapon",
        value: function addWeapon(name, type, ammo, automatic) {
            var weapon = new _weapon.Weapon(name, type, ammo, automatic);
            if (this.exists(weapon)) {
                console.log("Weapon already exists");
                return;
            }
            this.weapons.push(weapon);
        }
    }]);

    return WeaponBase;
}();