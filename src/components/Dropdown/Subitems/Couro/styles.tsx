import styled from "styled-components";
import { colors } from "../../../../styles/designSystem";


export const DropdownMenu = styled.div`
  position: absolute;
  top: 140px;
  z-index: 10;
  background-color: ${colors.white[200]};
  width: 100%;
  height: 302px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
