import React from "react";

export default class Select extends React.Component {

    render() {
        return(
            <select name="select-view-type" id="select-view-type" onChange={this.props.selectView}>
                <option value="table">Table</option>
                <option value="list">List</option>
            </select>
        );
    }
}