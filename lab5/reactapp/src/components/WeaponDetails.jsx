import React, { Component } from 'react'


export class WeaponDetails extends Component {

    render() {
        return (
            <div>
                <h2>Weapon Details</h2>
                <ul>{this.props.weapon.getDetails()}</ul>
            </div>
        )
    }
}