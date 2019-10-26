import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ReportCard, Human, Clock, Button, NewsCard } from "./style";
import { Container, CardContainer, CardTitle } from "../globals";
import Title from "../Title";

import standing from "../../assets/standing.png";
import clock from "../../assets/clock.png";

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
        <Title title="tramn!" orange=" by rnv" />
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
              <Human src={standing} />
            </ReportCard>
          </Link>
        </CardContainer>

        <CardContainer>
          <CardTitle>Aktuelle Störung</CardTitle>
          {this.state.news.text ? (
            <NewsCard>
              <div>
                <h2>{this.state.news.title}</h2>
                <p>{this.state.news.text.substring(20, 90) + "..."}</p>
                <Button>Mehr lesen</Button>
              </div>
              <Clock src={clock} />
            </NewsCard>
          ) : null}
        </CardContainer>
      </Container>
    );
  }
}
export default Home;
