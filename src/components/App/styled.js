import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto 6em;
  grid-template-areas: 
    "header newGame"
    "board sidebar"
    "footer footer";
  grid-gap: ${props => props.theme.spacers.lg};
  align-content: start;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto 0 auto;

  ${media.tablet`
    grid-template-columns: auto auto;
    grid-template-rows: auto auto 5em;
    grid-template-areas: 
      "header newGame"
      "board sidebar"
      "footer footer";
    grid-gap: ${props => props.theme.spacers.md};
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
    grid-gap: ${props => props.theme.spacers.sm};
  `}
`;

const Header = styled.header`
  grid-area: header;
  ${media.padding}
`;

const NewGame = styled.section`
  grid-area: newGame;
`;

const Sidebar = styled.section`
  grid-area: sidebar;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export { Grid, Header, NewGame, Sidebar, Footer };
