import styled from "styled-components";
import { theme } from "../theme";
import { Shadows } from "../globals";

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;
export const Orange = styled.span`
  color: ${theme.brand.default};
`;
export const CardContainer = styled.div`
  margin-bottom: 30px;
`;
export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
`;
export const Card = styled.div`
    background-color: ${theme.bg.default};
    border-radius 12px;
    padding: 8px;

    ${Shadows.default};

  &:hover {
    ${Shadows.hover};
  }

  &:active {
    ${Shadows.active};
  }
`;

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 80px;
  border-top: 1px solid #d6dce7;
  background-color: #f6f6f6;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const NavElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
