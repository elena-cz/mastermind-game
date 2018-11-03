import styled from 'styled-components/macro';
import media from 'style/utils/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 20em;
  grid-template-rows: 10em auto 10em;
  grid-template-areas: 
    "header header"
    "board sidebar"
    "footer footer";
  grid-gap: ${props => props.theme.spacer.lg};
  min-height: 100vh;
  width: 90%;
  margin: 0 auto 0 auto;
  background-color: ${props => props.theme.blue};

  ${media.tablet`
    grid-template-columns: auto 15em;
    grid-template-rows: 8em auto 8em;
    grid-template-areas: 
      "header header"
      "board sidebar"
      "footer footer";
    grid-gap: ${props => props.theme.spacer.md};
    width: 100%;
  `}
  ${media.phone`
    grid-template-columns: 100%;
    grid-template-rows: 5em auto auto 8em;
    grid-template-areas: 
      "header"
      "board"
      "sidebar"
      "footer";
    grid-gap: ${props => props.theme.spacer.sm};
  `}
`;

const Header = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.yellow};
`;

const Board = styled.main`
  grid-area: board;
  background-color: ${props => props.theme.purple};
`;

const Sidebar = styled.section`
  grid-area: sidebar;
  background-color: ${props => props.theme.green};
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: ${props => props.theme.yellow};
`;

export { Grid, Header, Board, Sidebar, Footer };

// ${props => props.theme.blue}