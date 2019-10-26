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

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 18px;
`;

export const InputCard = styled(Card)`
  h2 {
    font-size: 18px;
  }
  p {
    font-weight: bold;
  }
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
    border: none;
  }

  &:focus {
    border: none;
  }
`;

export const Select = styled.select`
  border: 1px solid ${theme.text.placeholder};
  padding: 8px;
  background-color: ${theme.bg.default};
  margin-bottom: 32px;
  border-radius: 12px;

  &:focus {
    border: none;
  }
`;

export const Input = styled.input`
  border: 1px solid ${theme.text.placeholder};
  padding: 8px;
  height: 64px;
  background-color: ${theme.bg.default};
  margin-bottom: 32px;
  border-radius: 12px;

  &:focus {
    border-radius: 12px;
    border: none;
  }
`;
