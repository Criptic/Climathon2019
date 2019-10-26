import React from "react";
import { SearchBar, SearchContainer, Input } from "./style";
import { Search as SearchIcon } from "react-feather";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SearchBar>
        <SearchContainer>
          <Input
            placeholder="Suche nach Tags, Fahrzeugen oder Themen"
            value={this.props.search}
            onChange={this.props.onChange}
          />
          <button
            onClick={this.props.onClick}
            style={{ backgroundColor: "white", border: "none" }}
          >
            <SearchIcon color={"#5C6166"} />
          </button>
        </SearchContainer>
      </SearchBar>
    );
  }
}
