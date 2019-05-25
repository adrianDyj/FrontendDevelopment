import { WeaponService } from "./service/weaponService"
import { WeaponBuilder } from "./model/weaponBuilder"

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const weaponBuilder = new WeaponBuilder()
const weaponService = new WeaponService()

app.get('/api/', (req, res) => res.send('Hi there!!!'));

app.get('/api/weapons', (req, res) => {
    res.send(weaponService.getWeapons());
});

app.get('/api/weapon/:weaponId', (req, res) => {
    res.send("Weapon has been added!");
});

app.post('/api/weapon', (req, res) => {
    var weapon = weaponBuilder.buildWeapon(req)
    var result = weaponService.addWeapon(weapon)
    res.send({"Result": result});
});

app.delete('/api/weapon', (req, res) => {
    var weapon = weaponBuilder.buildWeapon(req)
    var result = weaponService.removeWeapon(weapon)
    res.send({"Result": result});
});

app.listen(port, () => console.log('Example app listening on port ' + port));
