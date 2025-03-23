import { forwardRef } from 'react';
import * as S from './styles';
import CategorySection from './cateorySection';
import Typography from '../Typography';
import { colors } from '../../styles/designSystem';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct: string | null;
  isFilter?: boolean; // Modo de filtro geral
  isFilterSize?: boolean; // Exibe a seção de TAMANHO
  isFilterOrder?: boolean; // Exibe a seção de ORDEM
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

const sizes = [
  ['34', '36', '38', '40', '42'],
  ['44', 'PP', 'P', 'M', 'G'],
];

const orders = [
  'NOVIDADES',
  'MAIS VISTOS',
  'MENOR PREÇO',
  'MAIOR PREÇO',
];

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ isOpen, onClose, activeProduct, isFilter = false, isFilterSize = false, isFilterOrder = false }, ref) => {
    if (!isOpen || !activeProduct) return null;

    return (
      <S.DropdownMenu ref={ref}>
        {!isFilter && (
          <>
            <CategorySection
              title="CATEGORIAS"
              data={categories.categorias}
              onClose={onClose}
              hasDivider
            />
            <CategorySection
              title="ACESSÓRIOS"
              data={categories.acessorios}
              onClose={onClose}
            />
            <CategorySection
              title="INTIMATES"
              data={categories.intimates}
              onClose={onClose}
            />
          </>
        )}

        {isFilter && (
          <>
            <CategorySection
              title="CATEGORIAS"
              data={categories.categorias}
              onClose={onClose}
              hasDivider
            />

            {isFilterSize && (
              <S.SizeContainer>
                <Typography
                  size={'12px'}
                  fontWeight={'700'}
                  color={colors.black[300]}
                  onClick={onClose}
                >
                  TAMANHOS
                </Typography>
                <S.SizeGrid>
                  {sizes.map((row, rowIndex) => (
                    <S.SizeRow key={rowIndex}>
                      {row.map((size, sizeIndex) => (
                        <S.SizeBox key={sizeIndex}>
                          <Typography
                            size={'11px'}
                            color={colors.black[300]}
                            onClick={onClose}
                          >
                            {size}
                          </Typography>
                        </S.SizeBox>
                      ))}
                    </S.SizeRow>
                  ))}
                </S.SizeGrid>
              </S.SizeContainer>
            )}

            {/* Exibe a seção de ORDEM se isFilterOrder for true */}
            {isFilterOrder && (
              <S.SizeContainer>
                <Typography
                  size={'12px'}
                  fontWeight={'700'}
                  color={colors.black[300]}
                  onClick={onClose}
                >
                  ORDEM
                </Typography>
                <S.SizeGrid>
                  {orders.map((order, index) => (
                    <S.SizeRow key={index}>
                      <S.SizeBox>
                        <Typography
                          size={'11px'}
                          color={colors.black[300]}
                          onClick={onClose}
                        >
                          {order}
                        </Typography>
                      </S.SizeBox>
                    </S.SizeRow>
                  ))}
                </S.SizeGrid>
              </S.SizeContainer>
            )}
          </>
        )}
      </S.DropdownMenu>
    );
  }
);

export default Dropdown;