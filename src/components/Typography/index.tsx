import React from "react";
import * as S from "./styles";

const Typography = ({ children, fontSize, fontWeight, color, textAlign, margin }) => {
  return (
    <S.Typography 
      fontSize={fontSize} 
      fontWeight={fontWeight} 
      color={color} 
      textAlign={textAlign} 
      margin={margin}
    >
      {children}
    </S.Typography>
  );
};

export default Typography;
