import React from 'react';
import axios from 'axios';

class Weapon extends React.Component {

    state = {
        weapon: '',
        weapons: []
    }

    componentDidMount() {
        this.fetchWeapons();
    }

    renderWeapons() {
        return this.state.weapons.map((n) => n).join(', ')
    }

    async fetchWeapons() {
        const values = await axios.get("http://localhost:4000/api/weapons/all");
        console.log(values);
        this.setState({weapons: values.data})
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:4000/api/weapon", {weapon: this.state.weapon});
        await this.fetchWeapons();
    }

    render() {
        return (
            <div>
                
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter weapon:</label>
                        <input value={this.state.weapon} onChange={event => this.setState({weapon: event.target.value})} />
                        <button>Submit</button>
                    </form>
                </div>

                <div>{this.renderWeapons()}</div>
            </div>
        )
    }

}

export default Weapon;