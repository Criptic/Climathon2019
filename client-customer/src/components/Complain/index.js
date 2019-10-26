import React from "react";
import { Container } from "../globals";
import {
  BouncyDiv,
  NormalDiv,
  ComplainCard,
  Input,
  Button,
  BottomRow,
  Counter,
  Anger,
} from "./style";
import anger from "../../assets/anger.png";
import Title from "../Title";

export default class Complain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", counter: 0, animate: false };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value,
      counter: event.target.value.length,
    });
  }

  handleSubmit(event) {
    this.setState({ animate: true });
    //alert("A name was submitted: " + this.state.message);
    event.preventDefault();
  }
  render() {
    return (
      <Container>
        <Title title="lass es" orange="raus" />
        <p style={{ textAlign: "center", marginBottom: "64px" }}>
          Was bedrückt dich? Was regt dich auf? Komm schon! Wir halten das aus!
        </p>
        <ComplainCard>
          <Input
            placeholder="Sag's uns..."
            value={this.state.message}
            onChange={this.handleChange}
          />
          <BottomRow>
            <Counter>{this.state.counter} / 240</Counter>
            <Button onClick={this.handleSubmit}>Abschicken</Button>
          </BottomRow>
        </ComplainCard>
        <NormalDiv>
          <Anger src={anger} />
        </NormalDiv>
      </Container>
    );
  }
}
