import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;

  & > div {
    display: grid;
    grid-template-columns: repeat(${(props) => props.itemsPerRow}, 1fr);
    gap: 10px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
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
