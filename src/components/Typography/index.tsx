import { HTMLAttributes, ReactNode } from 'react';
import * as S from './styles';
import GlobalStyle from '../../styles/fonts';

export interface ITypography extends HTMLAttributes<HTMLParagraphElement> {
  fontWeight?: string;
  color?: string;
  children: string | ReactNode;
  size?: number | string;
  textOverflow?: string;
  cursor?: boolean
}

const Typography: React.FC<ITypography> = ({
  fontWeight = '400',
  color = '#000000',
  children,
  textOverflow,
  size = '12px',
  cursor = false,
  ...rest
}) => {
  return (
  <> 
    <GlobalStyle/>
    <S.P
      textOverflow={textOverflow}
      fontWeight={fontWeight}
      cursor={String(cursor)}
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </S.P> 
  </>    
  );
};

export default Typography;