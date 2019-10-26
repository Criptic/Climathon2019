import React, { Component } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";
import { ChevronLeft } from "react-feather";
import { Link, Redirect } from "react-router-dom";

import { Container } from "../globals";

import {
  NavBlocker,
  BackButton,
  Heading,
  InputCard,
  Button,
  Select,
  Input,
} from "./style";
class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleId: null,
      qrReaderStyle: { width: "100%" },
      incidentCategory: 1,
      complaint: "",
      customerId: 1,
      toHome: false,
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
      axios
        .get(
          `/createTicket?vehicleId=${this.state.vehicleId}&incidentCategory=${this.state.incidentCategory}&complaint=${this.state.complaint}&customerId=${this.state.customerId}`
        )
        .then(res => console.log(res));
      this.setState({ toHome: true });
    }
  };

  render() {
    if (this.state.toHome === true) {
      console.log("hello");
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <NavBlocker />
        <BackButton>
          <ChevronLeft />
          <Link to="/">Zurück</Link>
        </BackButton>

        <div style={this.state.qrReaderStyle}>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </div>
        <p>
          {this.state.vehicleId ? (
            <Heading>{`Ausgewählte Tram: ${this.state.vehicleId}`}</Heading>
          ) : (
            <Heading>Keine Tram erkannt</Heading>
          )}
        </p>
        {this.state.vehicleId ? (
          <InputCard>
            <h2>Sag's uns</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Select
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
              </Select>
              <Input
                type="text"
                id="complaint"
                value={this.state.complaint}
                onChange={this.handleComplaintChange}
                placeholder="Beschreibe dein Problem"
              />
              <Button onClick={this.handleClick}>Ab damit</Button>
            </div>
          </InputCard>
        ) : (
          ""
        )}
      </Container>
    );
  }
}
export default Report;
