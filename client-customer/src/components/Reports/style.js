import styled from "styled-components";
import { Shadows, Card } from "../globals";
import { theme } from "../theme";

export const NavBlocker = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 82px;
  z-index: 1;
  background-color: #ecedee;
`;

export const BackButton = styled.div`
  display: flex;
  flex-direaction: row;
  align-items: center;
  color: ${theme.brand.default};
  a {
    color: ${theme.brand.default};
  }
  margin-bottom: 32px;
`;

export const Button = styled.button`
  background-color: ${theme.brand.default};
  border-radius: 12px;
  border: none;
  padding: 6px;
  margin-top: 16px;
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

export const Label = styled.label`
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input`
  height: 24px;
  width: 24px;
`;

export const ComplainCard = styled(Card)`
background-color: ${props =>
  props.status == "1" ? theme.brand.alt : "#89c5cc"}
h2 {
    font-size: 18px;
  }
  p {
    font-weight: bold;
´  }`;
