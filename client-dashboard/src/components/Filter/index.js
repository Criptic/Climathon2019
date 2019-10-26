import React from "react";
import { Container, Text } from "./style";
import { Tag, X } from "react-feather";

export default function Filter(props) {
  return (
    <Container>
      <Tag size={16} color={"#5C6166"} />
      <Text>{props.text}</Text>
      <X size={14} color={"#5C6166"} />
    </Container>
  );
}
