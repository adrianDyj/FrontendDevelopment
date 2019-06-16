import React, { Component } from 'react';
import { Weapon } from '../model/Weapon';

export class AddWeapon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weaponName: "",
            weaponAmmo: ""
        }
    }

    applySelectedItem() {
        var weapon = this.props.weapon
        if (weapon == null) return
        this.setState({
            weaponName: weapon.name,
            weaponAmmo: weapon.range
        })
    }

    componentDidMount() {
        this.applySelectedItem()
    }

    setDefaultState() {
        this.setState({
            weaponName: "",
            weaponAmmo: ""
        })
    }

    onSubmitClicked = event => {
        event.preventDefault()
        this.setDefaultState()
        var weapon = new Weapon(
            this.state.weaponName,
            this.state.weaponAmmo
        )
        this.props.onSubmitClicked(weapon)
    }

    render() {
        const title = this.props.title
        return (<div>
            <h2>{title}</h2>
            <form onSubmit={this.onSubmitClicked}>
                <label>Name</label><br/>
                <input value={this.state.weaponName} onChange={event => this.setState({weaponName: event.target.value})}></input><br/>
                <label>Ammo</label><br/>
                <input value={this.state.weaponAmmo} onChange={event => this.setState({weaponAmmo: event.target.value})}></input><br/>
                <button>Submit</button>
            </form>
        </div>)
    }
}