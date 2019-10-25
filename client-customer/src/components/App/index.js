import React from "react";
import {
  Container,
  Title,
  Orange,
  CardTitle,
  Card,
  CardContainer,
} from "./style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/complain">Lass es raus</Link>
            </li>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/complain">
            <Complain />
          </Route>
          <Route path="/profile">
            <Profil />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
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

function Complain() {
  return (
    <Container>
      <h2>Lass es raus</h2>
    </Container>
  );
}

function Profil() {
  return (
    <Container>
      <h2>Profil & Einstellungen</h2>
    </Container>
  );
}
