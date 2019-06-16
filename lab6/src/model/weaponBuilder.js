import  { Weapon } from './weapon'

export class WeaponBuilder {

    createWeapon(name, ammo) {
        return new Weapon(
            name,
            ammo
        )
    }


}