import { Database } from './database'
import  { Weapon } from './weapon'

const database = new Database()

var ak = new Weapon(
    "Ak-47",
    30
)

var shotung = new Weapon(
    "Shotgyn",
    15
)

database.addWeapon(ak)
database.addWeapon(shotung)

var akInBase = database.isWeaponExistsInBase(ak)
var shotgunInBase = database.isWeaponExistsInBase(shotung)

console.log(database.getWeaopns())

database.removeWeapon(ak)
database.isWeaponExistsInBase(ak)
console.log(database.getWeaopns())
shotgunInBase = database.isWeaponExistsInBase(shotgun)
console.log(`Shotgun in base ${shotgun}`)