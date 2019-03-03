var shotgun = {
    name: "Shotgun",
    type: "Firearm",
    ammo: 5,
    automatic: false
};

var desertEagle = {
    name: "DesertEagle",
    type: "Firearm",
    ammo: 15,
    automatic: false
};

var uzi = {
    name: "Uzi",
    type: "Firearm",
    ammo: 25,
    automatic: true
};

var ak47 = {
    name: "AK-47",
    type: "Firearm",
    ammo: 35,
    automatic: true
};

var weapons = [shotgun, desertEagle, uzi];

function addWeapon(weapon) {
    if (weapons.indexOf(weapon) === -1) {
        weapons.push(weapon);
        console.log("Item added!")
    } else {
        console.log("This item already exists!");
    }
};

function updateWeapon() {

};

function deleteLastWeapon() {
    weapons.pop();
};

function findByName(name) {
    return weapons.find(weapon => weapon.name === name);
};

function findByType(type) {
    return weapons.find(weapon => weapon.type === type);
};

function findAutomatic() {
    return weapons.find(weapon => weapon.automatic === true);
};

function findNonAutomatic() {
    return weapons.find(weapon => weapon.automatic === false);
};

function main() {
    consol.log(findByName("shotgun"));
};
