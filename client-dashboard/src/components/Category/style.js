import styled from "styled-components";
import { Card, Shadows } from "../../components/globals";
import { theme } from "../../components/theme";

export const CategoryCard = styled(Card)`
  heigt: 48px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const Text = styled.h2`
  font-size: 16px;
  font-weight: 600px;
`;
export const Badge = styled.div`
  border-radius: 100%;
  height: 24px;
  width: 24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  background-color: ${theme.brand.default}
  color: white;
`;
