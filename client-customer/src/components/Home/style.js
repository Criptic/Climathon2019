import styled from "styled-components";
import { Card, Shadows } from "../globals";
import tram from "../../assets/tram.png";
import { theme } from "../theme";

export const ReportCard = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #2f3676;

  p {
    font-weight: bold;
    color: ${theme.bg.default};
  }
  h2 {
    font-size: 18px;
    color: ${theme.bg.default};
  }
`;
export const Human = styled.img`
  border-radius: 12px;
  width: 100%;
  height: auto;
`;
export const Button = styled.button`
  background-color: ${theme.brand.default};
  border-radius: 12px;
  border: none;
  padding: 6px;
  font-size: 16px;
  font-weight: bold;
  color: ${theme.bg.default};

  ${Shadows.default};

  &:hover {
    ${Shadows.hover};
  }

  &:active {
    ${Shadows.active};
  }
`;

export const NewsCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #89c5cc;
  h2 {
    font-size: 18px;
    color: ${theme.bg.default};
  }
  p {
    font-weight: bold;
    color: ${theme.bg.default};
  }
`;

export const Clock = styled.img`
  height: 100px;
  width: 100px;
`;
