import React from "react";
import { TitleText, TitleContainer } from "./style";
import { Bell } from "react-feather";
import { Orange } from "../globals";
import { Link } from "react-router-dom";

export default function Title(props) {
  return (
    <TitleContainer>
      <TitleText>
        {props.title} <Orange>{props.orange}</Orange>
      </TitleText>
      <Link to="/reports">
        <Bell />
      </Link>
    </TitleContainer>
  );
}
