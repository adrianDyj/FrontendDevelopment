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

Weapon.prototype.shoot = function () {
    console.log("Pow Pow Pow")
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

function MachineGun (id, name, type, ammo, automatic, shootingSpeed) {
    Weapon.call(this, id, name, type, ammo, automatic);
    this.shootingSpeed = shootingSpeed;
}

MachineGun.prototype = Object.create(Weapon.prototype);
MachineGun.prototype.constructor = MachineGun;

Shotgun.prototype.getKickback = function () {
    return this.kickback;    
}

MachineGun.prototype.getShootingSpeed = function() {
    return this.shootingSpeed;
}

// ----------------- Test -------------------

var shotgun = new Shotgun(4321, "shotgun", "firearm", 4, false, 50);

var machinegun = new MachineGun(4322, "machineGun", "firearm", 79, true, 300);

console.log(shotgun.getKickback);
console.log(machinegun.getShootingSpeed);

var weaponBase = (function() {
    weapons = []

    var isWeaponExists = function(weapon) {
        weapons.array.forEach(element => {
            if (element == weapon) return true
        })
        return false
    }

    return {
        addShotgun: function(id, name, type, ammo, automatic, kickback) {
            var shotgun = new Shotgun(id, name, type, ammo, automatic, kickback)
            if (isWeaponExists(shotgun)) {
                console.log("Weapon already exists!")
                return
            }
            weapons.push(shotgun)
        },
        addMachineGun: function(id, name, type, ammo, automatic, shootingSpeed) {
            var machineGun = new MachineGun(id, name, type, ammo, automatic, shootingSpeed)
            if (isWeaponExists(machineGun)) {
                console.log("Weapon already exists!")
                return
            }
            weapons.push(machineGun)
        },
        removeWeapons: function(weapon) {
            var weaponId = weapons.indextOf(weapon)
            weapons.slice(weaponId, 1)
        },
        getWeapons() {
            return weapons
        }
    }
})

var database = weaponBase()

var Ak47 = database.addMachineGun(4323, "Ak47", "firearm", 30, true, 600)

console.log(database.getWeapons())