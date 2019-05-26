const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
const weapons = [];

app.get('/api/', (req, res) => res.send('Hi there!!!'));

app.get('/api/weapons/all', (req, res) => {
    res.send(weapons);
});

app.get('/api/weapon', (req, res) => {
    res.send(req.body.weapon);
});

app.post('/api/weapon', (req, res) => {
    const weapon = req.body.weapon;
    weapons.push(weapon);
    res.send("Weapon has been added!");
});

app.delete('/api/weapon', (req, res) => {
    res.send("Unsupported.");
});

app.listen(port, () => console.log('Example app listening on port ' + port));
