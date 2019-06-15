import React, { Component } from 'react';
import './App.css';

import AddWeapon from './component/AddWeapon'
import WeaponItem from './component/WeaponItem'

const weapons = [
  {
    name: 'Ak-47',
    ammo: 32 
  },
  {
    name: 'Shotgun',
    ammo: 2
  }
]

localStorage.setItem('weapons', JSON.stringify(weapons))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weapons: JSON.parse(localStorage.getItem('weapons'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const weapons = this.getWeapons();

    this.setState({ weapons });
  }

  getWeapons() {
    return this.state.weapons;
  }

  onDelete(name) {
    const weapons = this.getWeapons();

    const filteredWeapons = weapons.filter(weapon => {
      return weapon.name !== name;
    });

    this.setState({ weapons: filteredWeapons });
  }

  onAdd(name, ammo) {
    const weapons = this.getWeapons();
    
    weapons.push({
      name,
      ammo
    });

    this.setState({ weapons });
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
