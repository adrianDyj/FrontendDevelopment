import React, { Component } from 'react';
import { WeaponBase } from '../domain/database';
import { Weapons } from './Weapons.jsx'
import { WeaponDetails } from './WeaponDetails'


export class HomeComponent extends Component {

    constructor(props) {
        super(props)
        
        this.weaponBase = new WeaponBase()
        this.state = {
            weapons: this.weaponBase.getWeapons(),
            actualWeapon: 0
        }
        
    }

    tick() {
        this.setState({
            actualWeapon: 
            (this.state.actualWeapon + 1) 
            % this.state.weapons.length
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div> 
                <Weapons weapons={this.state.weapons}/> 
                <WeaponDetails weapon={this.state.weapons[this.state.actualWeapon]}/>
            </div>
        )

    }

}