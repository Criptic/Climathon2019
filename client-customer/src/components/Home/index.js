import React from "react";
import { Container, CardContainer, Card, CardTitle } from "../globals";

import Title from "../Title";

export default function Home() {
  return (
    <Container>
      <Title title="tramn by" orange="rnv" />
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
