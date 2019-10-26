import React from "react";
import {
  Container,
  Title,
  Orange,
  CardTitle,
  Card,
  CardContainer,
  Navbar,
  NavElement,
} from "./style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MessageSquare, ThumbsDown, User } from "react-feather";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Link to="/">
            <NavElement>
              <MessageSquare />
              <span>Melden</span>
            </NavElement>
          </Link>

          <Link to="/complain">
            <NavElement>
              <ThumbsDown />
              <span>Lass es raus</span>
            </NavElement>
          </Link>

          <Link to="/profile">
            <NavElement>
              <User />
              <span>Profil</span>
            </NavElement>
          </Link>
        </Navbar>

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
