import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ReportCard, Image, Button } from "./style";
import { Container, CardContainer, CardTitle, Card } from "../globals";
import Title from "../Title";

import standing from "../../assets/standing.png";

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
          <CardTitle>Störung melden</CardTitle>
          <Link to="/report">
            <ReportCard>
              <div>
                <h2>Dich nervt was?</h2>
                <p>
                  Her damit! Nutze den Barcode um dein Problem oder dein
                  Feedback zu melden!
                </p>
                <Button>Go for it!</Button>
              </div>
              <Image src={standing} />
            </ReportCard>
          </Link>
        </CardContainer>

        <CardContainer>
          <CardTitle>Aktuelle Störung: {this.state.news.title}</CardTitle>
          <Card>{this.state.news.text}</Card>
        </CardContainer>
      </Container>
    );
  }
}
export default Home;
