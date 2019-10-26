import React from "react";
import { SearchBar, SearchContainer, Input } from "./style";
import { Search as SearchIcon } from "react-feather";

export default function Search() {
  return (
    <SearchBar>
      <SearchContainer>
        <Input placeholder="Suche nach Tags, Fahrzeugen oder Themen" />
        <SearchIcon color={"#5C6166"} />
      </SearchContainer>
    </SearchBar>
  );
}
