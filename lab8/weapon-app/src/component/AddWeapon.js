import React, { Component } from 'react';

class AddWeapon extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.ammoInput.value);

        this.nameInput.value = '';
        this.ammoInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add Weapon</h3>
                <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
                <input placeholder="Ammo" ref={ammoInput => this.ammoInput = ammoInput}/>
                <button>Add</button>

                <hr />
            </form>
        );
    }

}

export default AddWeapon;
