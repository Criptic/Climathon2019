import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, CardContainer, CardTitle } from "../globals";
import Title from "../Title";

class Home extends Component {
  state = {
    news: "",
  };
  componentDidMount() {
    axios.get(`/getNews`).then(res => this.setState({ news: res.data[0] }));
  }

  render() {
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
        <CardContainer>
          <CardTitle>Aktuelle Störung: {this.state.news.title}</CardTitle>
          <div>{this.state.news.text}</div>
        </CardContainer>
      </Container>
    );
  }
}
export default Home;
