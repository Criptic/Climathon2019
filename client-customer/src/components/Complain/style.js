import styled from "styled-components";
import { Shadows } from "../globals";
import { theme } from "../theme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  height: 110%;
  text-align: center;
`;
export const ComplainCard = styled.div`
    background-color: ${theme.bg.default};
    border-radius 12px;
    padding: 8px;
    padding-top: 16px;

    ${Shadows.default};


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
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
export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Counter = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.text.tertiary};
`;
export const Input = styled.input`
  border: none;
  font-size: 16px;
`;

export const Anger = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 64px;
`;
