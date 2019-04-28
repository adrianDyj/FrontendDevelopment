import React, { Component } from 'react';
import './App.css';
import WeaponList from './components/WeaponList/WeaponList.jsx';
import WeaponDetails from './components/WeaponDetails/WeaponDetails.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <WeaponList />
        <WeaponDetails />
      </div>
    );
  }
}

export default App;
