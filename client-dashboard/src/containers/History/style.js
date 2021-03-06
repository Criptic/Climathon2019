import styled from "styled-components";
import { Container, Shadows } from "../../components/globals";
import { theme } from "../../components/theme";

export const FilterContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  margin-top: 32px;
`;

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

export const Graph = styled.img`
  width: 350px;
  height: auto;
`;
