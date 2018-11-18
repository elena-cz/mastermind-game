import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "header header"
    "board sidebar";
  grid-gap: ${props => props.theme.spacers.lg};
  align-content: start;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto 0 auto;
  padding-bottom: 6em;

  ${media.smallDesktop`
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "header"
      "board"
      "sidebar";
    grid-gap: ${props => props.theme.spacers.md};
    width: 95vw;
  `}
  ${media.phone`
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "header"      
      "board"
      "sidebar";
    grid-gap: ${props => props.theme.spacers.sm};
    width: 100vw;
  `}
`;


const Header = styled.header`
  grid-area: header;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: ${props => props.theme.spacers.lg}; 

  ${media.smallDesktop`
    padding-top: ${props => props.theme.spacers.md};
  `}
  ${media.phone`
    padding-top: ${props => props.theme.spacers.sm};
    padding-left: ${props => props.theme.spacers.sm};
    padding-right: ${props => props.theme.spacers.sm};
  `}
`;

const Sidebar = styled.section`
  grid-area: sidebar;

  ${media.smallDesktop`
    padding-top: ${props => props.theme.spacers.md};
  `}
  ${media.phone`
    padding: ${props => props.theme.spacers.sm};
  `}
`;


export { Grid, Header, Sidebar };
