import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: auto auto 6em;
  grid-template-areas: 
    "header newGame"
    "board sidebar"
    "foooter footer";
  grid-gap: ${props => props.theme.spacers.lg};
  align-content: start;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto 0 auto;

  ${media.smallDesktop`
    grid-template-columns: 80% auto;
    grid-template-rows: auto auto 5em;
    grid-template-areas: 
      "header newGame"
      "board sidebar"
      "foooter footer";
    grid-gap: ${props => props.theme.spacers.md};
    width: 95vw;
  `}

  ${media.tablet`
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto 5em;
    grid-template-areas: 
      "header"
      "newGame"
      "board"
      "sidebar"
      "footer";
    grid-gap: ${props => props.theme.spacers.md};
    width: 95vw;
  `}
  ${media.phone`
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto 4em;
    grid-template-areas: 
      "header"
      "newGame"
      "board"
      "sidebar"
      "footer";
    grid-gap: ${props => props.theme.spacers.sm};
    width: 100vw;
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
