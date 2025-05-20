import React from "react";

export default class Table extends React.Component {
    render() {
        return (
            <table border="1">
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Date of birth
                    </th>
                    <th>
                        Address
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.user.name} {this.props.user.surname}</td>
                        <td>{this.props.user.dateOfBirth}</td>
                        <td>{this.props.user.street} {this.props.user.city}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}