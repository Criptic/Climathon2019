import styled from "styled-components";
import { theme } from "../theme";

export const Checkbox = styled.input`
  height: 24px;
  width: 24px;
  background-color: ${theme.brand.default};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: ${props => props.border && "1px solid #d6dce7"};
`;
export const Label = styled.label`
  font-size: 18px;
  margin-left: 8px;
  white-space: pre-wrap;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
