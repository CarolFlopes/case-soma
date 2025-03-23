import { useState, useEffect } from "react";
import { useProductsStore } from "../../hooks/useProductStore";
import * as S from "./styles";

interface ProductListProps {
  category: string;
  cluster: string;
}

const ProductList: React.FC<ProductListProps> = ({ category, cluster }) => {
  const { filteredProducts, loading, error, fetchProducts, filterByCategoryAndCluster } = useProductsStore();
  const [visibleRows, setVisibleRows] = useState(6);
  const [itemsPerRow, setItemsPerRow] = useState(2);

  // Carrega os produtos ao montar o componente
  useEffect(() => {
    fetchProducts(); // Carrega os produtos ao montar o componente
  }, [fetchProducts]);

  // Filtra os produtos sempre que a categoria ou o cluster mudarem
  useEffect(() => {
    console.log('Filtrando por categoria e cluster...');
    filterByCategoryAndCluster(category, cluster);
  }, [category, cluster, filterByCategoryAndCluster]);

  const visibleProducts = filteredProducts.slice(0, visibleRows * itemsPerRow * 3);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <S.Container>
      <S.Options>
        <span>Exibir:</span>
        <select value={itemsPerRow} onChange={(e) => setItemsPerRow(Number(e.target.value))}>
          <option value={2}>2 por fileira</option>
          <option value={4}>4 por fileira</option>
        </select>
      </S.Options>

      <S.Grid itemsPerRow={itemsPerRow}>
        {visibleProducts.map((product, index) => (
          <S.ProductCard key={index}>
            <S.Image src={product.images[0]} alt={product.productTitle} />
            <S.Title>{product.productTitle}</S.Title>
            <S.Price>R$ {product.Price.toFixed(2)}</S.Price>
          </S.ProductCard>
        ))}
      </S.Grid>

      {visibleProducts.length < filteredProducts.length && (
        <S.LoadMoreButton onClick={() => setVisibleRows((prev) => prev + 6)}>
          Exibir mais
        </S.LoadMoreButton>
      )}
    </S.Container>
  );
};

export default ProductList;
