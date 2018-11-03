import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 20em;
  grid-template-rows: auto auto 6em;
  grid-template-areas: 
    "header newGame"
    "board sidebar"
    "footer footer";
  grid-gap: ${props => props.theme.spacer.lg};
  align-content: start;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto 0 auto;

  ${media.tablet`
    grid-template-columns: auto 15em;
    grid-template-rows: auto auto 5em;
    grid-template-areas: 
      "header newGame"
      "board sidebar"
      "footer footer";
    grid-gap: ${props => props.theme.spacer.md};
    width: 100%;
  `}
  ${media.phone`
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto 4em;
    grid-template-areas: 
      "header"
      "newGame"
      "board"
      "sidebar"
      "footer";
    grid-gap: ${props => props.theme.spacer.sm};
  `}
`;

const Header = styled.header`
  grid-area: header;
  ${media.padding}
`;

const NewGame = styled.section`
  grid-area: newGame;
`;

const Board = styled.main`
  grid-area: board;
  min-height: 20em;
`;

const Sidebar = styled.section`
  grid-area: sidebar;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export { Grid, Header, NewGame, Board, Sidebar, Footer };
