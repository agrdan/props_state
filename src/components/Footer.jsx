import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer style={{width: "450px", display: "inline-block"}}>
                <hr />
                <a href="https://www.algebra.hr/" target="_blank">Official Page</a>
                <p>&copy; All rights reserved | {this.props.date} </p>
            </footer>
        );
    }
}