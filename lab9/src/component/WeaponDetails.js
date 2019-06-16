import React, { Component } from 'react'

export class WeaponDetails extends Component {

    renderDetails() {
        if(this.props.weapon) {
        var weapon = this.props.weapon
        return <div>
                <p>Name: {weapon.name}</p>
                <p>Ammo: {weapon.ammo}</p>
                <button onClick={this.props.onDeleteClicked}>Delete Weapon</button>
                <button onClick={this.props.onEditClicked}>Edit Weapon</button>
            </div>
        }
    }

    render() {
        return (
            <div>
                <h2>Weapon</h2>
                <div>{this.renderDetails()}</div>
            </div>
        )
    }
}