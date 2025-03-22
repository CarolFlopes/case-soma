import styled from "styled-components";
import { colors } from "../../../styles/designSystem";

export const DropdownMenu = styled.div`
  position: absolute;
  top: 140px;
  z-index: 10;
  background-color: ${colors.white[200]};
  padding: 20px;
  width: 100%;
  height: 302px;
  display: flex;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  width: 461px;
  height: 206px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 100%;
  margin-bottom: 20px;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px; 
  width: 100%; 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;