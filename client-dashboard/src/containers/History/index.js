import React from "react";
import { Content, Title, TitleContainer, HorizontalContainer } from "./style";
import { BarChart2 } from "react-feather";
import Search from "../../components/Search";
import ListItem from "../../components/ListItem";
import { CardTitle, CardContainer, Card } from "../../components/globals";

export default function History() {
  return (
    <Content>
      <TitleContainer>
        <Title>History</Title>
        <BarChart2 size={32} color={"#FC642D"} />
      </TitleContainer>
      <Search />
      <HorizontalContainer>
        <CardContainer>
          <CardTitle>Bearbeitete Meldungen</CardTitle>
          <Card style={{ width: "350px" }}>
            <ListItem checked border label="Tür Defekt - Sensorik" />
            <ListItem checked border label="Tür Defekt - Glasbruch" />
            <ListItem checked label="Bremse quietscht" />
            <div style={{ marginBottom: "8px" }}></div>
          </Card>
        </CardContainer>
        <CardContainer>
          <CardTitle>Kategorien</CardTitle>
          <Card>Hier lebt ein Graf</Card>
        </CardContainer>
      </HorizontalContainer>
    </Content>
  );
}
