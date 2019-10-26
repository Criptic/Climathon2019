import React, { Component } from "react";
import { Navbar, NavElement } from "./style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MessageSquare, ThumbsDown, User } from "react-feather";

import Profile from "../Profile";
import Home from "../Home";
import Complain from "../Complain";
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
              <Profile />
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
