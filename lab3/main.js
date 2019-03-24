function Weapon (id, name, type, ammo, automatic) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.ammo = ammo;
    this.automatic = automatic;
}

Weapon.prototype = {
    getId: function () {
        return this.id;
    },
    getName: function () {
        return this.name;
    },
    getType: function () {
        return this.type;
    },
    getAmmo: function () {
        return this.ammo;
    },
    isAutomatic: function () {
        return this.automatic;
    }
}

Weapon.prototype.message = function () {
    console.log("Hello, this is weapon.")
}

Weapon.prototype.addAmmo = function (ammoToAdd) {
    this.ammo += ammoToAdd;
}

// -----------------------------------------------

function Shotgun (id, name, type, ammo, automatic, kickback) {
    Weapon.call(this, id, name, type, ammo, automatic);
    this.kickback = kickback;
}

Shotgun.prototype = Object.create(Weapon.prototype);
Shotgun.prototype.constructor = Shotgun;

Shotgun.prototype = {
    getKickback: function () {
        return this.kickback;
    }
}

var shotgunExample = new Shotgun(4321, "shotgun", "firearm", 4, false, 50);
console.log(shotgunExample.getKickback);