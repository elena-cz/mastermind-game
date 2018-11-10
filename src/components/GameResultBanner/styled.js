import styled, { keyframes } from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { H2 } from 'sharedStyle/typography';


// const slideRight = keyframes`
//   0% {
//     width: 100%;
//   }
//   100% {
//     width: 0%;
//   }
// `;

  // animation: 2s ${slideRight} ease-in;


// const CoverText = styled(H2)`
//   position: absolute;
//   display: block;
//   z-index: 200;
//   opacity: ${props => (props.userWon || props.userLost) ? 0 : 1};
//   color: ${props => props.theme.colors.mediumGray};
//   transition: opacity 0.3s ease-in;
//   transition-property: opacity;
//   transition-duration: 0.3s;
//   transition-timing-function: ease-in;
//   transition-delay: ${props => (props.userWon || props.userLost) ? 0 : '2s'};
// `;

const UserWonBanner = styled(H2)`
  position: fixed;
  bottom: 50vh;
  display: block;
  padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.lg};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.primary};

  ${media.tablet`
    padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.md};
  `}
  ${media.phone`
    padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.md};
  `}
`;



export {
  UserWonBanner,
};
