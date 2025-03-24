import { forwardRef } from 'react';
import * as S from './styles';
import CategorySection from './cateorySection';
import Typography from '../Typography';
import { colors } from '../../styles/designSystem';
import { useProductsStore } from '../../hooks/useProductStore';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  activeProduct: string | null;
  isFilter?: boolean;
  isFilterSize?: boolean;
  isFilterOrder?: boolean;
  currentCategory?: string;
  currentCluster?: string;
}

type SortOption = {
  label: string;
  value: 'asc' | 'desc' | 'novidades' | 'mais_vistos';
};

export const categories = {
  categorias: {
    produtos1: [
      'VESTIDO',
      'TOP/BLUSA',
      'CALÇA',
      'CAMISA',
      'JAQUETA',
      'MACACÃO',
    ],
    produtos2: ['SAIA', 'SHORT', 'BLAZER', 'COLETE', 'VER TUDO >'],
    tecidos1: ['COURO', 'SEDA', 'TRICOT', 'CLUB/NOITE', 'JEANS', 'MALHA'],
    tecidos2: ['ALFAIATARIA', 'VER TUDO >'],
  },
  acessorios: {
    acessorios1: ['BOLSAS', 'CALÇADOS', 'CINTO', 'COLAR', 'ANEL', 'BRINCO'],
    acessorios2: ['PULSEIRA/BRACELETE', 'ECHARPE/LENÇO', 'VER TUDO >'],
  },
  intimates: {
    intimates: ['LINGERIE', 'UNDERWEAR', 'VER TUDO >'],
  },
};

const sizes = [
  ['34', '36', '38', '40', '42'],
  ['44', 'PP', 'P', 'M', 'G'],
];

const sortOptions: SortOption[] = [
  { label: 'NOVIDADES', value: 'novidades' },
  { label: 'MAIS VISTOS', value: 'mais_vistos' },
  { label: 'MENOR PREÇO', value: 'asc' },
  { label: 'MAIOR PREÇO', value: 'desc' },
];

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      isOpen,
      onClose,
      activeProduct,
      isFilter = false,
      isFilterSize = false,
      isFilterOrder = false,
      currentCategory,
      currentCluster,
    },
    ref
  ) => {
    const { filterByCategoryAndCluster, sortByPrice } = useProductsStore();

    if (!isOpen) return null;

    const dropdownType = isFilterSize
      ? 'size'
      : isFilterOrder
      ? 'order'
      : 'default';

    return (
      <S.DropdownMenu ref={ref} $variant={dropdownType}>
        {/* Category Section - Exibido apenas se não for filtro */}
        {!isFilter && activeProduct && (
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

        {/* Filter Sections */}
        {isFilterSize && (
          <>
            <CategorySection
              title="CATEGORIAS"
              data={categories.categorias}
              onClose={onClose}
              hasDivider
            />
            <S.SizeContainer>
              <Typography
                size={'12px'}
                fontWeight={'700'}
                color={colors.black[300]}
              >
                TAMANHOS
              </Typography>
              <S.SizeGridContainer>
                {sizes.map((row, rowIndex) => (
                  <S.SizeRow key={rowIndex}>
                    {row.map((size) => (
                      <S.SizeBox
                        key={size}
                        onClick={() => {
                          filterByCategoryAndCluster(currentCategory || '', currentCluster || '', size);
                          onClose();
                        }}
                      >
                        <Typography size={'11px'} color={colors.black[300]}>
                          {size}
                        </Typography>
                      </S.SizeBox>
                    ))}
                  </S.SizeRow>
                ))}
              </S.SizeGridContainer>
            </S.SizeContainer>
          </>
        )}

        {isFilterOrder && (
          <S.OrderContainer>
            <S.OptionsRow>
              {sortOptions
                .filter(
                  (
                    option
                  ): option is { label: string; value: 'asc' | 'desc' } =>
                    option.value === 'asc' || option.value === 'desc'
                )
                .map(({ label, value }) => (
                  <S.OrderContent
                    key={value}
                    onClick={() => {
                      sortByPrice(value);
                      onClose();
                    }}
                  >
                    <Typography size={'11px'} color={colors.black[300]}>
                      {label}
                    </Typography>
                  </S.OrderContent>
                ))}
            </S.OptionsRow>
          </S.OrderContainer>
        )}
      </S.DropdownMenu>
    );
  }
);

export default Dropdown;