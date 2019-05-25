export default class Weapon {

    constructor(name, type, ammo, automatic) {
        this._name = name
        this._type = type
        this._ammo = ammo
        this._automatic = automatic
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get type() {
        return this._type
    }

    set type(value) {
        this._type = value
    }

    get ammo() {
        return this._ammo
    }

    set ammo(value) {
        this._ammo = value
    }

    get automatic() {
        return this._automatic
    }

    set automatic(value) {
        this._automatic = value
    }

    getDetails() {
        return `Name: ${this._name}, Type: ${this._type}, Ammunition: ${this._ammo}, Automatic: ${this._automatic}`
    }

}

export class Shotgun extends Weapon {

    constructor(name, type, ammo, automatic, kickback) {
        super(name, type, ammo, automatic)
        this._kickback = kickback
    }

    get kickback() {
        return this.kickback
    }

    set kickback(value) {
        this._kickback = value
    }

}

export class MachineGun extends Weapon {
    
    constructor(name, type, ammo, automatic, shootingSpeed) {
        super(name, type, ammo, automatic)
        this._shootingSpeed = shootingSpeed
    }

    get shootingSpeed() {
        return this.shootingSpeed
    }

    set shootingSpeed(value) {
        this._shootingSpeed = value
    }
}