import React from "react";
import Select from "./Select";
import Table from "./Table";
import List from "./List";

export default class Main extends React.Component {

    state = {
        showFormat: "table",
        attendee: {
            id: 1,
            name: "Ivo",
            surname: "Ivic",
            dateOfBirth: "1994-02-18",
            street: "Gajeva 1",
            city: "Varaždin"
        }
    }

    selectView = (event) => {
        this.setState( { showFormat: event.target.value }, this.showDataBasedOnViewType)
    }

    showDataBasedOnViewType = () => {
        if (this.state.showFormat === "table") {
            return <Table user={this.state.attendee} />
        } else if (this.state.showFormat === "list") {
            return <List user={this.state.attendee}/>
        } else {
            // it's impossible since we have select - but to be sure!
            return <p>Error loading content, wrong type selected: {this.state.showFormat}</p>
        }
    }

    render() {
        return (
          <div>
              <h3>Select view format: <Select selectView={this.selectView}/></h3>
              {this.showDataBasedOnViewType()}
          </div>
        );
    }

}