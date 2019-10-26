import styled from "styled-components";
import { Container, Shadows } from "../../components/globals";
import { theme } from "../../components/theme";

export const Title = styled.h1`
  font-size: 32px;
  margin-right: 16px;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Content = styled(Container)`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  justify-content: center;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  margin-top: 96px;
`;

export const FilterContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  margin-top: 32px;
`;

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
export const Zero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-top: 32px;
    color: ${theme.text.tertiary};
  }

  img {
    width: 100%;
    height: auto;
  }
`;
