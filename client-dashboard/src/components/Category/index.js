import React from "react";
import { CategoryCard, Text, Badge } from "./style";

export default function Category(props) {
  return (
    <CategoryCard>
      <Text>{props.text}</Text>
      <Badge>{props.count}</Badge>
    </CategoryCard>
  );
}
