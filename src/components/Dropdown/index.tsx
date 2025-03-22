import { forwardRef, useState } from "react";
import * as S from './styles';
import CategorySection from "./cateorySection";
import Couro from "./Subitems/Couro";



const subItemComponents: { [key: string]: React.ComponentType } = {
  COURO: Couro,
};

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct: string | null;
}

const categories = {
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
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

    if (!isOpen || !activeProduct) return null;

    const handleSubItemClick = (subItem: string) => {
      setActiveSubItem(subItem);
    };

    const renderContent = () => {
      if (activeSubItem) {
        const SubItemComponent = subItemComponents[activeSubItem];
        return (
          <>
            {SubItemComponent ? (
              <SubItemComponent />
            ) : (
              <div>Conteúdo não encontrado para {activeSubItem}.</div>
            )}
            <button onClick={() => setActiveSubItem(null)}>Voltar</button>
          </>
        );
      }

      return (
        <>
          <CategorySection
            title="CATEGORIAS"
            data={categories.categorias}
            onClose={onClose}
            hasDivider
            onSubItemClick={handleSubItemClick}
          />
          <CategorySection
            title="ACESSÓRIOS"
            data={categories.acessorios}
            onClose={onClose}
            onSubItemClick={handleSubItemClick}
          />
          <CategorySection
            title="INTIMATES"
            data={categories.intimates}
            onClose={onClose}
            onSubItemClick={handleSubItemClick}
          />
        </>
      );
    };

    return (
      <S.DropdownMenu ref={ref}>
        {renderContent()}
      </S.DropdownMenu>
    );
  }
);

export default Dropdown;