import React from "react";
import { Checkbox, Row, Label, CheckboxContainer } from "./style";
import { Info, MessageSquare } from "react-feather";

export default function ListItem() {
  return (
    <Row>
      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <Label>Element name</Label>
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
