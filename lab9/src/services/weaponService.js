
const axios = require('axios')
const URL = 'http://localhost:4000/api'

export class WeaponService {

    async getWeapons() {
        return await axios.get(`${URL}/weapons/all`)
            .then(res => res.data)
    }

    async addWeapons(weapon) {
        return await axios.post(`${URL}/weapons`, weapon)
            .then(res => res.data)
    }

    async deleteWeapons(weaponName) {
        return await axios.delete(`${URL}/weapons/${weaponName}`)
            .then(res => res.data)
    }

    async updateWeapon(weapon, weaponName) {
        return await axios.put(`${URL}/weapons/${weaponName}`, weapon)
            .then(res => res.data)
    }

}