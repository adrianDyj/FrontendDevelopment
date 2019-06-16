import  { Weapon } from '../model/weapon'

export class WeaponService {

    constructor() {
        this.weapons = [
            new Weapon(
                "Ak-47",
                30
            ),
            new Weapon(
                "Shotgun",
                3
            ),

        ]
    }

    weaponExists(weapon) {
        this.weapons.forEach(item => {
            if (item == weapon) return true
        })
        return false
    }

    addWeapon(weapon) {
        if (this.weaponExists(weapon)) {
            console.log("Weapon already exists in base!")
            return false
        }
        this.weapons.push(weapon)
        return true
    }

    removeWeapon(name) {
        var weaponIndex = this.weapons.findIndex(item => item.name === name)
        if (weaponIndex === -1) 
            return false
        
        this.weapons.splice(weaponIndex, 1)
        return true
    }

    editWeapon(weapon, weaponName) {
        var weaponIndex = this.weapons.findIndex(item => item.name === weaponName)
        if (weaponIndex === -1)
            return false
        
        this.weapons[weaponIndex] = weapon
        return true
    }

    getWeapons() {
        return this.weapons
    }

}