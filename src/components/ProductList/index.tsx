import { useState, useEffect } from 'react';
import { useProductsStore } from '../../hooks/useProductStore';
import * as S from './styles';
import Typography from '../Typography';

interface ProductListProps {
  category: string;
  cluster: string;
}

const ProductList: React.FC<ProductListProps> = ({ category, cluster }) => {
  const {
    filteredProducts,
    loading,
    error,
    fetchProducts,
    filterByCategoryAndCluster,
  } = useProductsStore();
  const [visibleRows, setVisibleRows] = useState(3);
  const [itemsPerRow, setItemsPerRow] = useState(2);

  // Carrega os produtos ao montar o componente
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filtra os produtos sempre que a categoria ou o cluster mudarem
  useEffect(() => {
    filterByCategoryAndCluster(category, cluster);
  }, [category, cluster, filterByCategoryAndCluster]);

  // Calcula os produtos visíveis com base no número de linhas e colunas
  const visibleProducts = filteredProducts.slice(0, visibleRows * itemsPerRow);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <>
      <S.Container>
        {/* Novo container de exibição */}
        <S.DisplayOptionsContainer>
          {/* Canto esquerdo: Categoria selecionada */}
          <S.CategoryText>
            <Typography size={'15px'}>
              Coleção &gt;{' '}
              {category.charAt(0).toUpperCase() +
                category.slice(1).toLowerCase()}
            </Typography>
          </S.CategoryText>

          {/* Meio: Filtros */}
          <S.FilterContainer>
            <S.FilterOption style={{marginRight: '60px'}}>
              <Typography size={'15px'}>FILTRAR POR</Typography> <S.ArrowDownIcon />
            </S.FilterOption>
            <S.FilterOption>
              <Typography size={'15px'}>ORDENAR POR</Typography> <S.ArrowDownIcon />
            </S.FilterOption>
          </S.FilterContainer>

          {/* Canto direito: Alternar entre 2 e 4 itens por fileira */}
          <S.ItemsPerRowContainer>
            <Typography>
              Visualizar:
            </Typography>
            <S.ItemsPerRowButton
              active={itemsPerRow === 2}
              onClick={() => setItemsPerRow(2)}
            >
              2
            </S.ItemsPerRowButton>
            <S.ItemsPerRowButton
              active={itemsPerRow === 4}
              onClick={() => setItemsPerRow(4)}
            >
              4
            </S.ItemsPerRowButton>
          </S.ItemsPerRowContainer>
        </S.DisplayOptionsContainer>

        {/* Grid de produtos */}
        <S.Grid itemsPerRow={itemsPerRow}>
          {visibleProducts.map((product, index) => (
            <S.ProductCard key={index}>
              <S.Image src={product.images[0]} alt={product.productTitle} />
              <S.Title>{product.productTitle}</S.Title>
              <S.PriceContainer>
                <S.Price>R$ {product.Price.toFixed(2)}</S.Price>
                {product.Installments && product.Installments.length > 0 && (
                  <S.Installments>
                    {product.Installments[0].NumberOfInstallments}x R${' '}
                    {product.Installments[0].Value.toFixed(2)}
                  </S.Installments>
                )}
              </S.PriceContainer>
            </S.ProductCard>
          ))}
        </S.Grid>

        {/* Botão "Carregar mais" */}
        {visibleProducts.length < filteredProducts.length && (
          <S.LoadMoreButton onClick={() => setVisibleRows((prev) => prev + 3)}>
            Carregar mais
          </S.LoadMoreButton>
        )}
      </S.Container>
    </>
  );
};

export default ProductList;
