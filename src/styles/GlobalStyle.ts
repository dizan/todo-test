import { createGlobalStyle, css } from 'styled-components';

const sizes = css`

`;

const fonts = css`
       body {
        font-family: 'Circe', sans-serif;
    }
`;

const globalCss = css`
    div, section {
      box-sizing: border-box;
    }
    
    * {
      position: relative;
      transition: 0.3s;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
    }
    
    input {
      transition: 0s;
    }
    
    h1{
      color: #025B6F;
      font-size: 36px;
      line-height: 42px;
    }
    
    
    input, textarea, select {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.26);
      padding: 15px;
      font-size: 14px;
      line-height: 16px;
      color: black;
      text-transform: uppercase;
      margin-bottom: 25px;
      
        &::placeholder {
          color: #E7E7E7;
        }
    }
    
    
    select {
     appearance: none;
    }

`;

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${globalCss};
`;

export default GlobalStyle;