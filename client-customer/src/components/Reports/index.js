import React, { Component } from "react";
import axios from "axios";

import { Container } from "../globals";

import Title from "../Title";

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerId: "1",
      incidentCategory: "0",
      tickets: "",
    };
  }

  handleClick = e => {
    axios.get(`/getTickets?customerId=${this.state.customerId}`).then(res => {
      console.log(res.data);
      this.setState({ tickets: res.data });
      console.log(this.state.tickets);
    });
  };

  render() {
    return (
      <Container>
        <Title title="tramn by" orange="rnv" />
        <label for="solvedOnlyCheckbox">
          Nur gelöste Tickets
          <input
            type="checkbox"
            id="solvedOnlyCheckbox"
            name="solvedOnlyCheckbox"
          />
        </label>
        {this.state.tickets ? (
          <ul>
            {this.state.tickets.map(element => {
              return (
                // Beschreibung der Elemente in "element" siehe dbStructure
                <li key={element.timeSubmitted}>{JSON.stringify(element)}</li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
        <input
          type="button"
          id="getTicketsButton"
          onClick={this.handleClick}
          name="getTicketsButton"
          value="Tickets suchen..."
        />
      </Container>
    );
  }
}
export default Reports;
