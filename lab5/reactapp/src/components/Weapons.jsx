import React, { Component } from 'react'


export class Weapons extends Component {

    render() {
        return (
            <div>
                <h2>Weapons</h2>
                <ul>
                    {this.props.weapons.map( weapon => 
                        <li key={weapon.toString()}>{weapon.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}