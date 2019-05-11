import { Database } from './database'
import  { Weapon, Shotgun, MachineGun } from './weapon'

const database = new Database()

database.addWeapon(new MachineGun(
    "Gun",
    "Firearm",
    20,
    false
))

let weapons = database.getWeapons()
console.log(weapons)