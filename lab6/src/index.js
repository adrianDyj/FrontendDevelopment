import { WeaponService } from "./service/weaponService"
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = new express()
const port = 4000

app.use(cors());
app.use(bodyParser.json())

const service = new WeaponService()

app.get('/api/', (req, res) => res.send('Hello'))

app.get('/api/weapons/all', (req, res) => res.send(service.getWeapons()))

app.post('/api/weapons', (req, res) => {
  var weapon = new Weapon(
    req.body.name,
    req.body.ammo
  )
  var result = service.addWeapon(weapon)
  res.send({ "result": result })
})

app.put('/api/weapons/:weaponName', (req, res) => {
  var weapon = new Weapon(
    req.body.name,
    req.body.ammo
  )
  var result = service.editWeapon(weapon, req.params.weaponName)
  res.send({ "result": result })
})

app.delete('/api/weapons/:weaponName', (req, res) => {
  var result = service.removeWeapon(req.params.weaponName)
  res.send({ "result": result })
})

app.listen(port, () => console.log(`App listening on port ${port}`))