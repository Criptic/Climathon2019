import React from "react";
import {
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

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  handleSearchClick(event) {
    event.preventDefault();
    alert("Test");
  }

  handleSearchChange(event) {
    event.preventDefault();
    this.setState({ search: event.target.value });
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
            <Card style={{ width: "350px" }}>
              <ListItem border label="Tür Defekt" />
              <ListItem border label="Tür Defekt - Senorik" />
              <ListItem label="Glasbruch - Fahrer" />
              <div style={{ marginBottom: "8px" }}></div>
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
