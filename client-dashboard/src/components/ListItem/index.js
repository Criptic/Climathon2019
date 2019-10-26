import React from "react";
import { Checkbox, Row, Label, CheckboxContainer } from "./style";
import { Info, MessageSquare } from "react-feather";

export default function ListItem(props) {
  return (
    <Row border={props.border}>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={props.checked} />
        <Label>{props.label}</Label>
      </CheckboxContainer>
      <div>
        <Info size={20} color={"#5C6166"} style={{ marginRight: "8px" }} />
        <MessageSquare
          size={20}
          color={"#5C6166"}
          style={{ marginRight: "8px" }}
        />
      </div>
    </Row>
  );
}
