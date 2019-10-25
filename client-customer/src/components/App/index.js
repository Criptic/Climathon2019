import React from "react";
import {
  Container,
  Title,
  Orange,
  CardTitle,
  Card,
  CardContainer,
} from "./style";

function App() {
  return (
    <Container>
      <Title>
        tramn by <Orange>rnv</Orange>
      </Title>

      <CardContainer>
        <CardTitle>Technischer Defekt</CardTitle>
        <Card>Dude... we need to fill this place!</Card>
      </CardContainer>

      <CardContainer>
        <CardTitle>Sonstige Meldungen</CardTitle>
        <Card>Dude... we need to fill this place!</Card>
      </CardContainer>
    </Container>
  );
}

export default App;
