import React, { Component } from 'react'


export class WeaponList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.weapons.map( weapon => 
                        <li key={weapon.name} onClick={() => this.props.onClick(this.props.weapons.indexOf(weapon))}>{weapon.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}