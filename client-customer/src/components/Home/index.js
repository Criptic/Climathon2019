import React from "react";
import { Container, CardContainer, CardTitle } from "../globals";

import Title from "../Title";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Title title="tramn by" orange="rnv" />
      <CardContainer>
        <CardTitle>
          <Link to="/report">Störung melden</Link>
        </CardTitle>
      </CardContainer>
      <CardContainer>
        <CardTitle>
          <Link to="/reports">Letzte Störungen...</Link>
        </CardTitle>
      </CardContainer>
    </Container>
  );
}
