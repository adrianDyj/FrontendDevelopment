const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = new express()
const port = 4000

app.use(cors());
app.use(bodyParser.json())

app.get('/api/', (req, res) => res.send('Hello'))

app.get('/api/weapons/all', (req, res) => res.send(axios.get(`${URL}/weapons/all`)
  .then(res => res.data)))

app.post('/api/weapons', (req, res) => {
  var weapon = new Weapon(
    name,
    ammo
  )
  var result = axios.post(`${URL}/weapons`, weapon).then(res => res.data)
  res.send({ "result": result })
})

app.put('/api/weapons/:weaponName', (req, res) => {
  var weapon = new Weapon(
    name,
    ammo
  )
  var result = axios.put(`${URL}/weapons/${weaponName}`, weapon).then(res => res.data)
  res.send({ "result": result })
})

app.delete('/api/weapons/:weaponName', (req, res) => {
  var result = axios.delete(`${URL}/weapons/${weaponName}`).then(res => res.data)
  res.send({ "result": result })
})

app.listen(port, () => console.log(`App listening on port ${port}`))