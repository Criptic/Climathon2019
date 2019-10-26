import styled from "styled-components";
import { theme } from "../theme";
import { Shadows } from "../globals";

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
