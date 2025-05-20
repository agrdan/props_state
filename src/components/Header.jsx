import React from "react";

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <button type="button" onClick={this.props.toggleView}>{this.props.buttonText}</button>
                {this.props.children}
                <hr />
                <ul>
                    <li><b>Tel:</b> +385 1 2332 861</li>
                    <li><b>Fax:</b> +385 1 2305 004</li>
                    <li><b>Email:</b> info@algebra.hr</li>
                </ul>
                <hr />
            </header>
        );
    }
}