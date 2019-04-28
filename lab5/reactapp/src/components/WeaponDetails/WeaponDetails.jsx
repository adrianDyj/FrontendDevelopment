import React from 'react';

class WeaponDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    {
                        "id": 1,
                        "name": "Ak-47",
                        "type": "Firearm"
                    },
                    {
                        "id": 2,
                        "name": "Desert Eagle",
                        "type": "Firearm"
                    },
                    {
                        "id": 3,
                        "name": "Glock",
                        "type": "Firearm"
                    }
                ]
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            data: [

                {
                    "id": 3,
                    "name": "Glock",
                    "type": "Firearm"
                }
            ]
        })
}

render() {
    return (
        <div>
            {this.state.data.map((weapon, i) => <DetailList key={i}
                data={weapon} />)}
        </div>
    )}
}

class DetailList extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.data.id}</li>
                <li>{this.props.data.name}</li>
                <li>{this.props.data.type}</li>
            </ul>
        );
    }
}

export default WeaponDetails;