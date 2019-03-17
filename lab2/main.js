var shotgun = {
    id: 1,
    name: "Shotgun",
    type: "Firearm",
    ammo: 5,
    automatic: false
};

var desertEagle = {
    id: 2,
    name: "DesertEagle",
    type: "Firearm",
    ammo: 15,
    automatic: false
};

var uzi = {
    id: 3,
    name: "Uzi",
    type: "Firearm",
    ammo: 25,
    automatic: true
};

var ak47 = {
    id: 4,
    name: "AK-47",
    type: "Firearm",
    ammo: 35,
    automatic: true
};

var weapons = [shotgun, desertEagle, uzi];

function addWeapon(weapon) {
    if (weapons.indexOf(weapon) === -1) {
        weapons.push(weapon);
        console.log("Weapon added.")
    } else {
        console.log("This weapon already exists.");
    }
}

function updateWeapon(weapon) {
    var foundIndex = weapons.find(weapon => weapon.id === id);
    if (foundIndex === -1) {
        console.log("Weapon doesn't exists.")
    } else {
        weapons[foundIndex] = weapon;
        console.log("Weapon updated.");
    }
}

function deleteWeapon(weapon) {
    const index = weapons.indexOf(weapon);
    if (index === -1) {
        console.log("Weapon doesn't exists.")
    } else {
        weapons.splice(index, 1);
        console.log("Weapon removed.")
    }
}

function deleteLastWeapon() {
    weapons.pop();
}

function findById(id) {
    return weapons.find(weapon => weapon.id === id);
}

function findByName(name) {
    return weapons.filter(weapon => weapon.name === name);
}

function findByType(type) {
    return weapons.filter(weapon => weapon.type === type);
}

function findAutomatic() {
    return weapons.filter(weapon => weapon.automatic === true);
}

function findNonAutomatic() {
    return weapons.filter(weapon => weapon.automatic === false);
}
