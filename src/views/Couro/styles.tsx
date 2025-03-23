import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 100%;
  height: 525px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #ff5733;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
