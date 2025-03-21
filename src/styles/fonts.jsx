import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Futural';
    src: url('/fonts/FuturaThin.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Futural', sans-serif;
  }
`;

export default GlobalStyle;