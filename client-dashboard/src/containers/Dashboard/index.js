import React from "react";
import { Content, Title, TitleContainer } from "./style";
import { Inbox } from "react-feather";

export default function Dashboard() {
  return (
    <Content>
      <TitleContainer>
        <Title>Inbox</Title>
        <Inbox size={32} color={"#FC642D"} />
      </TitleContainer>
    </Content>
  );
}
