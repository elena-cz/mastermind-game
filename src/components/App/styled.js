import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.grid.largeDesktop.percent}% auto;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "header header"
    "board sidebar";
  grid-gap: ${props => props.theme.spacers.lg};
  align-content: start;
  min-height: 100vh;
  width: ${props => props.theme.grid.largeDesktop.vw}vw;
  margin: 0 auto 0 auto;
  padding-bottom: 6em;

  ${media.smallDesktop`
    grid-template-columns: ${props => props.theme.grid.smallDesktop.percent}%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "header"
      "board"
      "sidebar";
    grid-gap: ${props => props.theme.spacers.md};
    width: ${props => props.theme.grid.smallDesktop.vw}vw;
  `}
  ${media.phone`
    grid-template-columns: ${props => props.theme.grid.phone.percent}%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "header"      
      "board"
      "sidebar";
    grid-gap: ${props => props.theme.spacers.sm};
    width: ${props => props.theme.grid.phone.vw}vw;
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
