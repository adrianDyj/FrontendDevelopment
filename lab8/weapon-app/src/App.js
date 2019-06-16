import React, { Component } from 'react';
import './App.css';
import WeaponService from './service/WeaponService'

import AddWeapon from './component/AddWeapon'
import WeaponItem from './component/WeaponItem'
import Axios from 'axios';

// const weapons = [
//   {
//     name: 'Ak-47',
//     ammo: 32 
//   },
//   {
//     name: 'Shotgun',
//     ammo: 2
//   }
// ]

// localStorage.setItem('weapons', JSON.stringify(weapons))

class App extends Component {
  constructor(props) {
    super(props);

    this.service = new WeaponService();

    this.state = {
      weapons: []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    Axios.get(`http://localhost:4000/api/weapons/all`)
            .then((response) => {
              this.setState({
                weapons: response.data
              })
            });
    // const weapons = this.getWeapons();

    // this.setState({ weapons });
  }

  getWeapons() {
    var weapons =  this.service.getWeapons()
    this.setState({ weapons: weapons})
  }

  onDelete(name) {
    // const weapons = this.getWeapons();

    // const filteredWeapons = weapons.filter(weapon => {
    //   return weapon.name !== name;
    // });

    this.service.deleteWeapon(name);

    // this.setState({ weapons: this.service.getWeapons() });
  }

  onAdd(name, ammo) {
    // const weapons = this.getWeapons();
    
    // weapons.push({
    //   name,
    //   ammo
    // });

    this.service.addWeapon({
      name: name,
      ammo: ammo
    });

    this.setState({ weapons: this.service.getWeapons() });
  }

  onEditSubmit(name, ammo, originalName) {
    let weapons = this.getWeapons();

    weapons = weapons.map(weapon => {
      if (weapon.name === originalName) {
        weapon.name = name;
        weapon.ammo = ammo;
      }

      return weapon;
    });

    this.setState({ weapons });
  }

  render() {
    return (
      <div className="App">
        <h1>Weapon Manager</h1>

        <AddWeapon 
          onAdd={this.onAdd}
        />

        {
          this.state.weapons.map(weapon => {
            return (
              <WeaponItem
                key={weapon.name}
                {...weapon}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
  
}

export default App;
