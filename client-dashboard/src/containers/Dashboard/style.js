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
  max-width: 800px;
  justify-conent: center;
  align-items: center;
`;
