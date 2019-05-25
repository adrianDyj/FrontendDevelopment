'use strict';

var _weaponService = require('./service/weaponService.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 4000;

app.use(bodyParser.json());

var weaponService = new _weaponService.WeaponService();

app.get('/api/', function (req, res) {
    return res.send(weaponService.getWeapons());
});

app.get('/api/weapons', function (req, res) {
    res.send(weapons);
});

app.get('/api/weapon/:weaponId', function (req, res) {
    res.send("Weapon has been added!");
});

app.post('/api/weapon', function (req, res) {
    var weapon = req.body.weapon;
    weapons.push(weapon);
    res.send({ "message": "weapon has been added" });
});

app.listen(port, function () {
    return console.log('Example app listening on port ' + port);
});