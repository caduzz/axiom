import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
    font-family: 'Work Sans';
    min-height: 100vh;
    background: linear-gradient(180deg, #141424 0%, #141424 37%, #1c3c4c 100%);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    font-family: 'Poppins';
  }
`;
 
export default GlobalStyle;