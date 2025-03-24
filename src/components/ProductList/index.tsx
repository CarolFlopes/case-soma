import { useState, useEffect } from 'react';
import { useProductsStore } from '../../hooks/useProductStore';
import * as S from './styles';
import Typography from '../Typography';
import Dropdown from '../Dropdown';
import useDropdown from '../../hooks/useDropdown';

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
    sortByPrice,
  } = useProductsStore();

  const { dropdownOpen, activeProduct, dropdownRef, setDropdownOpen } = useDropdown();

  const [visibleRows, setVisibleRows] = useState(3);
  const [itemsPerRow, setItemsPerRow] = useState(2);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFilterSize, setIsFilterSize] = useState(false);
  const [isFilterOrder, setIsFilterOrder] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    filterByCategoryAndCluster(category, cluster, selectedSize || undefined);
  }, [category, cluster, selectedSize, filterByCategoryAndCluster]);

  const handleFilterSizeClick = () => {
    setIsFilterSize(true); // Ativa o dropdown de tamanhos
    setIsFilterOrder(false); // Desativa o dropdown de ordenação
    setDropdownOpen(true); // Abre o dropdown
  };

  const handleFilterOrderClick = () => {
    setIsFilterOrder(true);
    setIsFilterSize(false);
    setDropdownOpen(true);
  };

  const visibleProducts = filteredProducts.slice(0, visibleRows * itemsPerRow);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <>
      {filteredProducts.length > 0 ? (
        <S.Container>
          <S.DisplayOptionsContainer>
            <S.CategoryText>
              <Typography size={'15px'}>
                Coleção &gt;{' '}
                {category.charAt(0).toUpperCase() +
                  category.slice(1).toLowerCase()}
              </Typography>
            </S.CategoryText>

            <S.FilterContainer>
              <S.FilterOption onClick={handleFilterSizeClick}>
                <Typography size={'15px'}>FILTRAR POR</Typography>
                <S.ArrowDownIcon />
              </S.FilterOption>
              <S.FilterOption onClick={handleFilterOrderClick}>
                <Typography size={'15px'}>ORDENAR POR</Typography>
                <S.ArrowDownIcon />
              </S.FilterOption>
            </S.FilterContainer>

            <S.ItemsPerRowContainer>
              <Typography>Visualizar:</Typography>
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

          {visibleProducts.length < filteredProducts.length && (
            <S.LoadMoreButton onClick={() => setVisibleRows((prev) => prev + 3)}>
              Carregar mais
            </S.LoadMoreButton>
          )}
        </S.Container>
      ) : (
        <Typography size={'25px'} fontWeight='700' style={{textAlign: 'center', marginTop: '20px'}}>
          Nenhum produto encontrado para a categoria {category.charAt(0).toUpperCase() +
            category.slice(1).toLowerCase()} e cluster {cluster}. Por favor, tente outro item da coleção.
        </Typography>
      )}
      
      {isFilterSize && (
        <Dropdown
          ref={dropdownRef}
          isOpen={dropdownOpen}
          onClose={() => {
            setIsFilterSize(false);
            setDropdownOpen(false);
          }}
          activeProduct={activeProduct}
          isFilterSize
          currentCategory={category}
          currentCluster={cluster}
        />
      )}

      {isFilterOrder && (
        <Dropdown
          ref={dropdownRef}
          isOpen={dropdownOpen}
          onClose={() => {
            setIsFilterOrder(false);
            setDropdownOpen(false);
          }}
          activeProduct={activeProduct}
          isFilterOrder
        />
      )}
    </>
  );
};

export default ProductList;