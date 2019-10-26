import React from "react";
import { Content, Title, TitleContainer, HorizontalContainer } from "./style";
import { Inbox } from "react-feather";
import Search from "../../components/Search";
import ListItem from "../../components/ListItem";
import { CardTitle, CardContainer, Card } from "../../components/globals";

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
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <div style={{ marginBottom: "32px" }}></div>
          </Card>
        </CardContainer>
        <CardContainer>
          <CardTitle>Kategorien</CardTitle>
          <Card style={{ width: "350px" }}>Hier müssen Kategorien hin</Card>
        </CardContainer>
      </HorizontalContainer>
    </Content>
  );
}
