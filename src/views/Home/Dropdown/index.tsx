import { forwardRef } from "react";
import * as S from './styles';
import Typography from "../../../components/Typography";
import { colors } from "../../../styles/designSystem";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct: string | null;
}

const produtos1 = ['VESTIDO', 'TOP/BLUSA', 'CALÇA', 'CAMISA', 'JAQUETA', 'MACACÃO'];
const produtos2 = ['SAIA', 'SHORT', 'BLAZER', 'COLETE', 'VER TUDO >'];

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ isOpen, onClose, activeProduct }, ref) => {
    if (!isOpen || !activeProduct) return null;

    return (
      <S.DropdownMenu ref={ref}>
        <S.CategoryContainer><S.Title>
          <Typography size={"15px"} fontWeight={"700"} color={colors.black[300]} onClick={onClose}>
            CATEGORIAS
          </Typography>
        </S.Title><S.ColumnsContainer>
        
          <S.Content>
            {produtos1.map((produto, index) => (
              <Typography key={index} size={"13px"} color={colors.black[300]} onClick={onClose}>
                {produto}
              </Typography>
            ))}
          </S.Content>
          <S.Content>
            {produtos2.map((produto, index) => (
              <Typography key={index} size={"13px"} color={colors.black[300]} onClick={onClose}>
                {produto}
              </Typography>
            ))}
          </S.Content></S.ColumnsContainer>
          </S.CategoryContainer>
        
        
      </S.DropdownMenu>
    );
  }
);

export default Dropdown;