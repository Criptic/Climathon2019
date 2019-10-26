import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Header, Logo, Link, Links, Orange, Container } from "./style";
import History from "../History";
import Dashboard from "../Dashboard";

export default function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Logo>
            tramn by <Orange>rnv</Orange>
          </Logo>
          <Links>
            <NavLink exact to="/">
              <Link>Inbox</Link>
            </NavLink>

            <NavLink to="/history">
              <Link>History</Link>
            </NavLink>
          </Links>
        </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
