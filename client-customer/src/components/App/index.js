import React, { Component } from "react";
import { Navbar } from "./style";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Home as HomeIcon, ThumbsDown, User } from "react-feather";

import Profile from "../Profile";
import Home from "../Home";
import Complain from "../Complain";
import Report from "../Report";
import Reports from "../Reports";
import { messaging } from "../../init-fcm";

export default class App extends Component {
  async componentDidMount() {
    Notification.requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });

    navigator.serviceWorker.addEventListener("message", message =>
      console.log(message)
    );
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <NavLink
              exact
              className="navElement"
              to="/"
              activeClassName="selected"
            >
              <HomeIcon />
              <span>Home</span>
            </NavLink>

            <NavLink
              className="navElement"
              to="/complain"
              activeClassName="selected"
            >
              <ThumbsDown />
              <span>Lass es raus</span>
            </NavLink>

            <NavLink
              className="navElement"
              to="/profile"
              activeClassName="selected"
            >
              <User />
              <span>Profil</span>
            </NavLink>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/complain">
              <Complain />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/report">
              <Report />
            </Route>
            <Route exact path="/reports">
              <Reports />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
