import styled, { keyframes } from 'styled-components/macro';
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

// const slideRight = keyframes`
//   0% {
//     width: 100%;
//   }
//   100% {
//     width: 0%;
//   }
// `;

const Cover = styled.div`
  position: absolute;
  right: 0;
  z-index: 100;
  width: 100%;
  transform-origin: right;
  transform: scaleX(${props => (props.userWon || props.userLost) ? 0 : 1});
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease-in;
  transition-delay: ${props => (props.userWon || props.userLost) ? '0.3s' : 0};
`;
  // animation: 2s ${slideRight} ease-in;


const CoverText = styled(H2)`
  position: absolute;
  display: block;
  z-index: 200;
  opacity: ${props => (props.userWon || props.userLost) ? 0 : 1};
  color: ${props => props.theme.colors.mediumGray};
  transition: opacity 0.3s ease-in;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  transition-delay: ${props => (props.userWon || props.userLost) ? 0 : '2s'};
`;


const SecretPegs = styled(GuessPegs)``;

const SecretPegContainer = styled(PegContainer)``;

const SecretPeg = styled(Peg)``;

const LeftSpace = styled(RoundNum)``;

const RightSpace = styled(KeyPegs)``;


export {
  SecretContainer,
  Cover,
  CoverText,
  SecretPegs,
  SecretPegContainer,
  SecretPeg,
  LeftSpace,
  RightSpace,
};
