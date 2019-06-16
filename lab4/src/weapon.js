export class Weapon {

    constructor(name, ammo) {
        this._name = name
        this._ammo = ammo
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get ammo() {
        return this._ammo
    }

    set ammo(value) {
        this._ammo = value
    }

}