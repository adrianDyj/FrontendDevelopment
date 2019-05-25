import  { Weapon, Shotgun, MachineGun } from '../model/weapon'


export class WeaponBuilder {

    buildWeapon(weapon) {
        var weapon = this.createWeapon(
                    request.body.name,
                    request.body.type,
                    request.body.ammo,
                    request.body.automatic
                )

        return weapon
    }

    createWeapon(name, type, ammo, automatic) {
        return new Weapon(
            name,
            type,
            ammo,
            automatic)
    }
}