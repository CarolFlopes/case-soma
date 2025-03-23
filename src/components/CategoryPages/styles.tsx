import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative; 
  width: 100%;
  height: 525px; 
`;

export const TextContainer = styled.div`
  position: absolute; 
  top: 50%;
  left: 200px; 
  transform: translateY(-50%); 
  width: 554px; 
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const Title = styled.div`
  display: flex;
  font-size: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Description = styled.div`

  text-align: center;  
`;