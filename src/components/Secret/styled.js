import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { H2 } from 'sharedStyle/typography';
import { Container, RoundNum, GuessPegs, KeyPegs } from 'components/Round/styled';
import { PegContainer, Peg } from 'components/CodePeg/styled';


const SecretContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  width: ${0.7 * 80}vw;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mediumGray};
  box-shadow: 1px 2px 4px #bdbdbd;

  ${media.smallDesktop`
    width: ${0.8 * 95}vw;
  `}
  ${media.tablet`
    width: ${95}vw;
  `}
  ${media.phone`
    width: ${100}vw;
  `}
`;

const Cover = styled.div`
  position: absolute;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
`;

const CoverText = styled(H2)`
  position: absolute;
  display: block;
  z-index: 200;
  color: ${props => props.theme.colors.mediumGray};
`;

const SecretPegs = styled(GuessPegs)``;

const SecretPegContainer = styled(PegContainer)``;

const SecretPeg = styled(Peg)``;

const LeftSpace = styled(RoundNum)``;

const RightSpace = styled(KeyPegs)``;


export { SecretContainer, Cover, CoverText, SecretPegs, SecretPegContainer, SecretPeg, LeftSpace, RightSpace };


// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 70% auto;
//   grid-template-rows: auto auto 6em;
//   grid-template-areas: 
//     "header newGame"
//     "board sidebar"
//     "foooter footer";
//   grid-gap: ${props => props.theme.spacers.lg};
//   align-content: start;
//   min-height: 100vh;
//   width: 80vw;
//   margin: 0 auto 0 auto;

//   ${media.smallDesktop`
//     grid-template-columns: 80% auto;
//     grid-template-rows: auto auto 5em;
//     grid-template-areas: 
//       "header newGame"
//       "board sidebar"
//       "foooter footer";
//     grid-gap: ${props => props.theme.spacers.md};
//     width: 95vw;
//   `}

//   ${media.tablet`
//     grid-template-columns: 100%;
//     grid-template-rows: auto auto auto auto 5em;
//     grid-template-areas: 
//       "header"
//       "newGame"
//       "board"
//       "sidebar"
//       "footer";
//     grid-gap: ${props => props.theme.spacers.md};
//     width: 95vw;
//   `}
//   ${media.phone`
//     grid-template-columns: 100%;
//     grid-template-rows: auto auto auto auto 4em;
//     grid-template-areas: 
//       "header"
//       "newGame"
//       "board"
//       "sidebar"
//       "footer";
//     grid-gap: ${props => props.theme.spacers.sm};
//     width: 100vw;
//   `}
// `;