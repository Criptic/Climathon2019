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
