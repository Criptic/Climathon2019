import React, { Component } from "react";
import axios from "axios";

import {
  NavBlocker,
  BackButton,
  Button,
  Label,
  Checkbox,
  ComplainCard,
} from "./style";
import { Container } from "../globals";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";

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
        <NavBlocker />
        <BackButton>
          <ChevronLeft />
          <Link to="/">Zurück</Link>
        </BackButton>
        <Label for="solvedOnlyCheckbox">
          Nur gelöste Meldungen
          <Checkbox
            type="checkbox"
            id="solvedOnlyCheckbox"
            name="solvedOnlyCheckbox"
          />
        </Label>
        {this.state.tickets ? (
          <div>
            {this.state.tickets.map(element => {
              return (
                // Beschreibung der Elemente in "element" siehe dbStructure
                <ComplainCard
                  status={element.status}
                  key={element.timeSubmitted}
                >
                  <h2>{element.complaint}</h2>
                  <p>
                    Kategorie:{" "}
                    <span style={{ fontWeight: "normal" }}>
                      {element.incidentCategory}
                    </span>
                  </p>
                  {element.status == "1" ? (
                    <p>Status: offen</p>
                  ) : (
                    <p>Status: abgeschlossen</p>
                  )}
                </ComplainCard>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <Button
          id="getTicketsButton"
          onClick={this.handleClick}
          name="getTicketsButton"
        >
          Meldungen suchen
        </Button>
      </Container>
    );
  }
}
export default Reports;
