import { createGlobalStyle } from 'styled-components/macro';

const globalStyle = createGlobalStyle`
  body {
    background-color: white;
    font-family: ${props => props.theme.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
  }
`;

export default globalStyle;