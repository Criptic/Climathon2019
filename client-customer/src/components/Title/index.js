import React from "react";
import { TitleText, TitleContainer } from "./style";
import { Mail } from "react-feather";
import { Orange } from "../globals";

export default function Title(props) {
  return (
    <TitleContainer>
      <TitleText>
        {props.title} <Orange>{props.orange}</Orange>
      </TitleText>
      <Mail />
    </TitleContainer>
  );
}
