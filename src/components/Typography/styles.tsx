import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLParagraphElement> {
  size?: any;
  fontWeight?: string;
  color?: string;
  textOverflow?: string;
  cursor?: string;
}

export const P = styled.p<Props>`
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-overflow: ${(props) => props.textOverflow};
  cursor: ${(props) => (props.cursor === 'true' ? 'pointer' : 'inherit')};
`;
