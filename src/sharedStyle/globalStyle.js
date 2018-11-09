import { createGlobalStyle } from 'styled-components/macro';

const globalStyle = createGlobalStyle`
  body {
    background-color: white;
    font-family: ${props => props.theme.typography.fontFamily};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
  }

  button, input {
    font-family: ${props => props.theme.typography.fontFamily};
    cursor: pointer;
    padding: 0;
    margin: 0;

    &:focus {
      outline:0;
    }

    &:disabled {
      cursor: auto;
    }
  }
`;

export default globalStyle;
