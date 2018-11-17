import { createGlobalStyle } from 'styled-components/macro';

const globalStyle = createGlobalStyle`
  html { 
    font-size: calc(0.9em + 0.08vw); 
  }

  body {
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-anchor: none;
    background-color: white;
    font-family: ${props => props.theme.typography.fontFamily};
  }

  button, input {
    padding: 0;
    margin: 0;
    outline:0;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: inherit;
    cursor: pointer;

    &:disabled {
      cursor: auto;
    }
  }
`;

export default globalStyle;
