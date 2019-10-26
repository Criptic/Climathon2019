import styled from "styled-components";
import { Shadows } from "../globals";
import { theme } from "../theme";

export const SearchBar = styled.div`
  border-radius: 12px;
  background-color: ${theme.bg.default};
  ${Shadows.default};

  width: 800px;
  height: 48px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-radius: 12px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;
`;
