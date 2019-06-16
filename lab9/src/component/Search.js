import React, { Component } from 'react';

export class Search extends Component {

    constructor(props) {
        super(props)
    }

    handleChange = event => {
        this.props.onSearchChange(event.target.value)
    }

    render() {
        const search = this.props.dollars
        return (<div>
            <label>Search </label>
            <input value={search} onChange={this.handleChange}/>
        </div>)
    }
}