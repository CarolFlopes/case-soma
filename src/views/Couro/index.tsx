import { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as S from "./styles";
import productsData from "../../data/products.json";

interface Product {
  productId: string;
  productName: string;
  link: string;
  categories: string[];
  items: {
    images: {
      imageUrl: string;
    }[];
    sellers: {
      commertialOffer: {
        Price: number;
      };
    }[];
  }[];
}

const CouroPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filteredProducts = (productsData as Product[]).filter((product) =>
      product.categories.some((category) =>
        category.toUpperCase().includes("CAMISA")
      )
    );
    setProducts(filteredProducts);
  }, []);

  const renderProducts = () => {
    if (products.length === 0) {
      return <p>Não há produtos disponíveis.</p>;
    }

    return products.map((product) => {
      const { productId, productName, link, items } = product;
      const imageUrl = items[0]?.images[0]?.imageUrl;
      const price = items[0]?.sellers[0]?.commertialOffer?.Price;

      return (
        <S.ProductCard key={productId}>
          {imageUrl ? (
            <img src={imageUrl} alt={productName} />
          ) : (
            <p>Imagem não disponível</p>
          )}
          <h2>{productName}</h2>
          {price ? (
            <p>{`R$ ${price.toFixed(2)}`}</p>
          ) : (
            <p>Preço indisponível</p>
          )}
          <a href={link} aria-label={`Ver detalhes de ${productName}`}>
            Ver detalhes
          </a>
        </S.ProductCard>
      );
    });
  };

  return (
    <>
      <Header />
      <S.ImgContainer>
        <img
          src="/images/couro.png"
          alt="Couro"
          width="100%"
          height="525px"
        />
      </S.ImgContainer>

      <S.ProductGrid>{renderProducts()}</S.ProductGrid>
    </>
  );
};

export default CouroPage;
