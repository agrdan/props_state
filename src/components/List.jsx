import React from "react";

export default class List extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    {this.props.user.name} {this.props.user.surname} - {this.props.user.dateOfBirth} -
                    {this.props.user.street}, {this.props.user.city}
                </li>
            </ul>
        );
    }
}