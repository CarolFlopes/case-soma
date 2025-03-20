import styled from "styled-components";

export const Typography = styled.p`
  font-family: 'Futural', sans-serif;
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
`;
