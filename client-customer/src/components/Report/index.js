import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Container, CardContainer, Card, CardTitle } from "../globals";

import Title from "../Title";

class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleId: null,
      qrReaderStyle: { width: "100%" },
      incidentCategory: 1,
      complaint: "",
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleComplaintChange = this.handleComplaintChange.bind(this);
    this.handleIncidentCategorySelect = this.handleIncidentCategorySelect.bind(
      this
    );
  }

  handleScan = data => {
    if (data) {
      this.setState({ vehicleId: data, qrReaderStyle: { display: "none" } });
    }
  };

  handleError = err => {
    console.log(err);
  };

  handleIncidentCategorySelect = e => {
    this.setState({ incidentCategory: e.target.value });
  };
  handleComplaintChange = e => {
    this.setState({ complaint: e.target.value });
  };

  handleClick = e => {
    if (
      !this.state.complaint ||
      !this.state.incidentCategory ||
      !this.state.vehicleId
    ) {
      alert("Füll aus!");
    } else {
    }
  };

  render() {
    return (
      <Container>
        <Title title="tramn by" orange="rnv" />
        <div style={this.state.qrReaderStyle}>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </div>
        <p>
          {this.state.vehicleId
            ? `Ausgewählte Tram: ${this.state.vehicleId}`
            : `Keine Tram erkannt`}
        </p>
        {this.state.vehicleId ? (
          <>
            <select
              name="category"
              id="incidentCategory"
              value={this.state.incidentCategory}
              onChange={this.handleIncidentCategorySelect}
            >
              <option value="1">Technische Störung</option>
              <option value="2">Verschmutzung</option>
              <option value="3">Verspätung</option>
              <option value="4">Überfüllung</option>
              <option value="5">Anschluss</option>
              <option value="6">Sicherheit</option>
              <option value="7">Personal</option>
              <option value="8">Fahrgastinformation</option>
              <option value="9999999">Sonstiges</option>
            </select>
            <input
              type="text"
              id="complaint"
              value={this.state.complaint}
              onChange={this.handleComplaintChange}
            />
            <button onClick={this.handleClick}>Abschicken</button>
          </>
        ) : (
          ""
        )}
      </Container>
    );
  }
}
export default Report;
