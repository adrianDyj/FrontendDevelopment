import  { Weapon } from './weapon'

export class Database {

    constructor() {
        this._weapons = []
    }

    isWeaponExistsInBase(weapon) {
        var result = false
        this._weapon.forEach(item => {
            if (item === weapon) 
                result = true
        })
        return result
    }

    addWeapon(weapon) {
        if (this.isWeaponExistsInBase(weapon)) {
            console.log("Given weapon already exists in base!")
            return
        }
        this._weapons.push(weapon)
    }

    removeWeapon(weapon) {
        let weaponIndex = this._weapons.indexOf(weapon)
        this._weapons.splice(weaponIndex, 1)
    }

    getWeaopns() {
        return this._weapons
    }

}