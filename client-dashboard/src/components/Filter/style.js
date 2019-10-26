import styled from "styled-components";
import { Shadows } from "../globals";
import { theme } from "../theme";

export const Container = styled.div`
  border-radius: 12px;
  background-color: ${theme.bg.default};
  padding-right: 8px;
  padding-left: 8px;
  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${Shadows.default};
  &:hover {
    ${Shadows.hover};
  }
`;

export const Text = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.text.tertiary};
  text-transform: uppercase;
  margin-left: 8px;
  margin-right: 16px;
`;
