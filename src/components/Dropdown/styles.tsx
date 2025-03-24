import styled from 'styled-components';
import { colors } from '../../styles/designSystem';

type DropdownVariant = 'default' | 'size' | 'order';

interface DropdownMenuProps {
  $variant: DropdownVariant;
}

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  z-index: 10;
  background-color: ${colors.white[200]};
  width: 100%;
  height: 302px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ $variant }) =>
    $variant === 'default' &&
    `
    top: 140px;
  `}

  ${({ $variant }) =>
    $variant === 'size' &&
    `
    top: 706px;
  `}
  
  ${({ $variant }) =>
    $variant === 'order' &&
    `
    top: 706px;
    height:90px;
  `}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 100px;
  height: 206px;
  align-items: flex-start;
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
  justify-content: flex-start;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`;

export const Item = styled.div`
  &:hover {
    cursor: pointer;
    p {
      font-weight: bold;
    }
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 40px;
  height: 206px;
`;

export const SizeGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 20px;
`;

export const SizeRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

export const SizeBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.gray[200]};
  cursor: pointer;
  font-size: 14px;
  color: ${colors.black[300]};
  &:hover {
    background-color: ${colors.gray[100]};
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

`;

export const OptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const OrderContent = styled.div`
  &:hover {
    cursor: pointer;
    p {
      font-weight: bold;
    }
  }
`;

export const SizeGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;
