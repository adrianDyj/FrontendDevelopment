import React, { Component } from 'react';
import { WeaponService } from '../services/weaponService'
import { WeaponList } from './WeaponList'
import { WeaponDetails } from './WeaponDetails'
import { AddWeapon } from './AddWeapon';

export class App extends Component {

    constructor(props) {
        super(props)

        this.weaponService = new WeaponService()
        this.baseWeeapon = []
        this.state = {
            weapons: [],
            actualWeapon: -1,
            inEdit: false
        }
    }

    componentDidMount() {
        this.getWeapons()
    }

    closeEdit() {
        this.setState({inEdit: false})
    }

    async getWeapons() {
        var weapons = await this.weaponService.getWeapons()
        this.mainWeapon = weapons
        this.setState({weapons: weapons})
        this.closeEdit()
    }

    onSearchChange = search => {
        if (search === "") {
            this.setState({weapons: this.mainWeapon})
            return
        }
        var weapons = []
        this.mainWeapon.forEach(item => {
            if (item.name.includes(search)) {
                weapons.push(item)
            }
        })
        this.setState({weapons: weapons})
    }

    onEditClicked = () => {
        var edit = !this.inEdit
        this.setState({inEdit: edit})
    }

    onWeaponClicked = clickedWeapon => {
        this.setState({actualWeapon: clickedWeapon})
        this.closeEdit()
    }

    onEditSubmitted = async weapon => {
        var weaponName = this.baseWeapon[this.state.actualWeapon].name
        await this.weaponService.updateWeapon(weapon, weaponName)
        this.getWeapons()
    }
    
    onSubmitClicked = async weapon => {
        await this.weaponService.addWeapon(weapon)
        this.getWeapons()
    }

    onDeleteWeaponClicked = async () => {
        var weaponName = this.state.weapons[this.state.actualWeapon].name
        await this.weaponService.deleteWeapon(weaponName)
        this.setState({actualWeapon: -1})
        this.getWeapons()
    }

    render() {
        return(
            <div className="App">
                <h2>Weapon Manager</h2>
                <AddWeapon title="Create" onSubmitClicked={this.onSubmitClicked} />
                <WeaponDetails 
                    weapon={this.state.weapons[this.state.actualWeapon]} 
                    onDeleteClicked={this.onDeleteWeaponCliced} 
                    onEditClicked={this.onEditClicked}/>
                {this.state.inEdit ? <AddWeapon 
                    title="Edit" onSubmitClicked={this.onEditSubmitted}
                    weapon={this.state.weapons[this.state.actualWeapon]}/> 
                    : null}
                <WeaponList weapons={this.state.weapons} onClick={this.onWeaponClicked} />
            </div>
        )
    }

}