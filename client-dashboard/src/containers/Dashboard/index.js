import React from "react";
import { Content, Title, TitleContainer, HorizontalContainer } from "./style";
import { Inbox } from "react-feather";
import Search from "../../components/Search";
import ListItem from "../../components/ListItem";
import { CardTitle, CardContainer, Card } from "../../components/globals";
import Category from "../../components/Category";

export default function Dashboard() {
  return (
    <Content>
      <TitleContainer>
        <Title>Inbox</Title>
        <Inbox size={32} color={"#FC642D"} />
      </TitleContainer>
      <Search />
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
