import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Futural';
    src: url('/fonts/FuturaThin.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;  
    font-family: 'Futural', sans-serif;
  }

  body {
    overflow-x: hidden;  
  }

  #root {
    min-height: 100%;
  }
`;

export default GlobalStyle;
