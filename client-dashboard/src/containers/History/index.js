import React from "react";
import {
  FilterContainer,
  Content,
  Title,
  TitleContainer,
  HorizontalContainer,
  Graph,
} from "./style";
import { BarChart2 } from "react-feather";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import ListItem from "../../components/ListItem";
import { CardTitle, CardContainer, Card } from "../../components/globals";
import graph from "../../assets/graph.png";

export default function History() {
  return (
    <Content>
      <TitleContainer>
        <Title>History</Title>
        <BarChart2 size={32} color={"#FC642D"} />
      </TitleContainer>
      <Search />
      <FilterContainer>
        <Filter text="Fahrzeug ID: 42069" />
        <Filter text="Störung" />
      </FilterContainer>
      <HorizontalContainer>
        <CardContainer>
          <CardTitle>Bearbeitete Meldungen</CardTitle>
          <Card style={{ width: "350px" }}>
            <ListItem checked border label="Licht defekt - Fahrzeug: 42069" />
            <ListItem checked border label="Tür Defekt - Fahrzeug: 42069" />
            <ListItem
              checked
              border
              label="Heizungsausfall - Fahrzeug: 42069"
            />
            <ListItem checked border label="Tür Defekt - Fahrzeug: 42069" />
            <ListItem checked label="Bremse quietscht - Fahrzeug: 42069" />
            <div style={{ marginBottom: "8px" }}></div>
          </Card>
        </CardContainer>
        <CardContainer>
          <CardTitle>Kategorien</CardTitle>
          <Graph src={graph} />
        </CardContainer>
      </HorizontalContainer>
    </Content>
  );
}
