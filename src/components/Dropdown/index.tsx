import { forwardRef } from "react";
import * as S from './styles';
import CategorySection from "./cateorySection";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct: string | null;
}

export const categories = {
  categorias: {
    produtos1: ['VESTIDO', 'TOP/BLUSA', 'CALÇA', 'CAMISA', 'JAQUETA', 'MACACÃO'],
    produtos2: ['SAIA', 'SHORT', 'BLAZER', 'COLETE', 'VER TUDO >'],
    tecidos1: ['COURO', 'SEDA', 'TRICOT', 'CLUB/NOITE', 'JEANS', 'MALHA'],
    tecidos2: ['ALFAIATARIA', 'VER TUDO >'],
  },
  acessorios: {
    acessorios1: ['BOLSAS', 'CALÇADOS', 'CINTO', 'COLAR', 'ANEL', 'BRINCO'],
    acessorios2: ['PILSEIRA/BRACELETE', 'ECHARPE/LENÇO', 'VER TUDO >'],
  },
  intimates: {
    intimates: ['LINGERIE', 'UNDERWEAR', 'VER TUDO >'],
  },
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ isOpen, onClose, activeProduct }, ref) => {
    if (!isOpen || !activeProduct) return null;

    return (
      <S.DropdownMenu ref={ref}>
        <CategorySection title="CATEGORIAS" data={categories.categorias} onClose={onClose} hasDivider/>
        <CategorySection title="ACESSÓRIOS" data={categories.acessorios} onClose={onClose}  />
        <CategorySection title="INTIMATES" data={categories.intimates} onClose={onClose} />
      </S.DropdownMenu>
    );
  }
);

export default Dropdown;