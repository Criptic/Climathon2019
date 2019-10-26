import styled from "styled-components";
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
