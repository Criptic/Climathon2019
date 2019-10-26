import React, { Component } from "react";
import axios from "axios";
import { Info } from "react-feather";

import {
  Checkbox,
  Row,
  Label,
  CheckboxContainer,
  Content,
  Title,
  TitleContainer,
  HorizontalContainer,
  FilterContainer,
} from "./style";
import { Inbox } from "react-feather";
import Search from "../../components/Search";
import ListItem from "../../components/ListItem";
import { CardTitle, CardContainer, Card } from "../../components/globals";
import Category from "../../components/Category";
import Filter from "../../components/Filter";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      workerId: "5",
      tickets: "",
      displayType: "flex",
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/getCurrentWorkerTickets?workerId=${this.state.workerId}`)
      .then(res => {
        const tickets = res.data.filter(el => el !== null);
        this.setState({ tickets });
        console.log(this.state.tickets);
      });
  }

  handleSearchClick(event) {
    event.preventDefault();
  }

  handleSearchChange(event) {
    event.preventDefault();
    this.setState({ search: event.target.value });
  }

  handleChecked(event) {
    this.setState({ displayType: "none" });
    axios.get("/updateTicket");
  }

  render() {
    return (
      <Content>
        <TitleContainer>
          <Title>Inbox</Title>
          <Inbox size={32} color={"#FC642D"} />
        </TitleContainer>
        <Search
          search={this.state.search}
          onChange={this.handleSearchChange.bind(this)}
          onClick={this.handleSearchChange.bind(this)}
        />
        <FilterContainer>
          <Filter text="F228122" />
        </FilterContainer>
        <HorizontalContainer>
          <CardContainer>
            <CardTitle>Offene Meldungen</CardTitle>
            <Card style={{ width: "350px", display: this.state.displayType }}>
              {this.state.tickets
                ? this.state.tickets.map(ticket => {
                    return (
                      <div key={ticket.timeSubmitted}>
                        {this.state.tickets[this.state.tickets.length - 1]
                          .timeSubmitted !== ticket.timeSubmitted ? (
                          <>
                            <ListItem
                              border
                              key={ticket.timeSubmitted}
                              label={ticket.complaint}
                              vehicleId={ticket.vehicleId}
                            />
                            <div style={{ marginBottom: "8px" }}></div>
                          </>
                        ) : (
                          <Row>
                            <CheckboxContainer>
                              <Checkbox
                                type="checkbox"
                                onChange={this.handleChecked}
                              />
                              <Label>{`${ticket.complaint} - Fahrzeug-ID: ${ticket.vehicleId}`}</Label>
                            </CheckboxContainer>
                            <div title={`Fahrzeug Nr. ` + ticket.vehicleId}>
                              <Info
                                size={20}
                                color={"#5C6166"}
                                style={{ marginRight: "8px" }}
                              />
                            </div>
                          </Row>
                        )}
                      </div>
                    );
                  })
                : ""}
            </Card>
          </CardContainer>
          <CardContainer>
            <CardTitle>Kategorien</CardTitle>
            <Category text="Mechanik-Tür" count="3" />
            <Category text="Kundenmanagement" count="2" />
            <Category text="Sauberkeit" count="2" />
            <Category text="Mechanik-Klima" count="1" />
          </CardContainer>
        </HorizontalContainer>
      </Content>
    );
  }
}
