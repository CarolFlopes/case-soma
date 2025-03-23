import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0; // Removido o padding lateral
`;

export const DisplayOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 41px;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const CategoryText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  gap:10px;
  &:hover{
    cursor: pointer;
    p{
      font-weight: bold;
    }
    border-bottom: 1px solid {colors.black[300]};
  }
`;

export const ArrowDownIcon = styled.span`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
`;

export const ItemsPerRowContainer = styled.div`
  display: flex;
  gap: 23px;
`;

export const ItemsPerRowButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#000" : "#888")};
`;

export const Options = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  select {
    padding: 6px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
`;

export const Grid = styled.div<{ itemsPerRow: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.itemsPerRow}, 1fr);
  gap: 0; // Remove o espaçamento entre as colunas
  width: 100%; // Ocupa 100% da largura disponível
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  background: #fff;
  width: 100%; // Ocupa 100% da largura do Grid
`;

export const Image = styled.img`
  width: 100%;
  height: 720px; // Defina uma altura fixa ou use aspect-ratio
  object-fit: cover; // Corta a imagem para cobrir o container
  object-position: top; // Prioriza o topo da imagem ao cortar
  display: block;
`;

export const Title = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Installments = styled.p`
  font-size: 14px;
  color: #666;
`;

export const LoadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #444;
  }
`;

export const NoProductsMessage = styled.p`
  margin-top: 20px;
  text-align: center;
  width: 100%;
  align-items: center;
  justify-content: center;
`;