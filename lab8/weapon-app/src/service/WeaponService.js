import { Weapon } from '../model/weapon';
const axios = require('axios')
const BaseUrl = 'http://localhost:4000/api'

export class WeaponService {

    async getWeapons() {
        return await axios.get(`${BaseUrl}/weapons/all`)
            .then(res => res.data)
    }

    async deleteWeapon(weaponName) {
        return await axios.delete(`${BaseUrl}/weapons/${weaponName}`)
            .then(res => res.data)
    }

    async updateWeapon(weapon, weaponName) {
        return await axios.put(`${BaseUrl}/weapons/${weaponName}`, weapon)
            .then(res => res.data)
    }

    async addWeapon(name) {
        return await axios.post(`${BaseUrl}/weapon`, name)
            .then(res => res.data)
    }

}

export default WeaponService;