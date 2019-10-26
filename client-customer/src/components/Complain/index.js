import React from "react";
import { Container, Title, Orange, Card } from "../globals";
import {
  ComplainCard,
  Input,
  Button,
  BottomRow,
  Counter,
  Anger,
  Content,
} from "./style";
import anger from "../../assets/anger.png";

export default class Complain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", counter: 0 };

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
    alert("A name was submitted: " + this.state.message);
    event.preventDefault();
  }
  render() {
    return (
      <Container>
        <Title>
          lass es <Orange>raus</Orange>
        </Title>
        <p>
          Was bedrückt dich? Was regt dich auf? Komm schon! Wir halten das aus!
        </p>
        <ComplainCard>
          <Input
            placeholder="Give it to me"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <BottomRow>
            <Counter>{this.state.counter} / 240</Counter>
            <Button onClick={this.handleSubmit}>Abschicken</Button>
          </BottomRow>
        </ComplainCard>
        <div style={{ textAlign: "center", width: "100%" }}>
          <Anger src={anger} />
        </div>
      </Container>
    );
  }
}
