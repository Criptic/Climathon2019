import styled from "styled-components";
import { Shadows } from "../../components/globals";
import { theme } from "../../components/theme";

export const Container = styled.div`
  padding: 8px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h1`
  font-size: 24px;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Link = styled.span`
  color: ${theme.text.tertiary};
  margin-left: 32px;
  margin-right: 32px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: ${theme.text.default};
  }
`;
export const Orange = styled.span`
  color: ${theme.brand.default};
`;
