import React from 'react';

class WeaponList extends React.Component {

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

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.data.map((weapon, i) => <TableRow key={i}
                            data={weapon} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render() {
       return (
          <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
          </tr>
       );
    }
 }

 export default WeaponList;