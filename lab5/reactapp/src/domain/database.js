import  { Weapon, Shotgun, MachineGun } from './weapon'

export class WeaponBase {

    constructor() {
        this.weapons = [
            new Weapon(
                "Desert Eagle",
                "Firearm",
                15,
                false
            ),
            new Shotgun(
                "Mossberg",
                "Firearm",
                6,
                false
            ),
            new MachineGun(
                "Ak-47",
                "Firearm",
                30,
                true,
                6
            ),
            new MachineGun(
                "Uzi",
                "Firearm",
                40,
                true
            ),

        ]
    }

    exists(weapon) {
        this.weapons.forEach(element => {
            if (element === weapon) return true
        })
        return false
    }

    addWeapon(name, type, ammo, automatic) {
        let weapon = new Weapon(name, type, ammo, automatic)
        if (this.exists(weapon)) {
            console.log("Weapon already exists")
            return
        }
        this.weapons.push(weapon)
    }

    removeWeapon(weapon) {
        let index = this.weapons.indexOf(weapon)
        this.weapons.splice(index, 1)
    }

    getWeapons() {
        return this.weapons
    }

}