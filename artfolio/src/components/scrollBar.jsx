import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Webkit browsers like Chrome, Safari */

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #black;
  }

`;

export default GlobalStyles;