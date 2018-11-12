import styled, { keyframes, css } from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { H2 } from 'sharedStyle/typography';


const target = -50;

const flyUp = keyframes`
  0% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  33% {
    transform: translateY(${target}vh);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(${0.84 * target}vh);
    animation-timing-function: ease-in;
  }
  66% {
    transform: translateY(${target}vh);
    animation-timing-function: ease-out;
  }
  82% {
    transform: translateY(${0.96 * target}vh);
    animation-timing-function: ease-in;
  }
  92% {
    transform: translateY(${target}vh);
    animation-timing-function: ease-out;
  }
  97% {
    transform: translateY(${0.98 * target}vh);
    animation-timing-function: ease-in;
  }
  100% { 
    transform: translateY(${target}vh);
  }
`;

const stay = keyframes`
  0%, 100% {
    transform: translateY(${target}vh);
  }
`;

const flyDown = keyframes`
  0% {
    transform: translateY(${target}vh);
  }
  10% { 
    transform: translateY(${1.04 * target}vh);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(100px);
    animation-timing-function: ease-in;
  }
`;

const animation = css`
  animation: 
    ${flyUp} 1.5s,
    ${stay} 2s 1.5s,
    ${flyDown} 1.5s 3.5s;
`;


const Banner = styled(H2)`
  visibility: ${props => props.showBanner ? 'visible' : 'hidden'};
  position: fixed;
  bottom: 0;
  left: ${0.5 * 0.7 * 80}vw;
  display: block;
  z-index: 100;
  box-sizing: border-box;
  padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.lg};
  margin: ${props => props.theme.spacers.sm};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.userWon ? props.theme.colors.primary : props.theme.colors.red};
  color: ${props => props.userWon ? props.theme.colors.primary : props.theme.colors.red};
  ${props => props.showBanner ? animation : ''}

  ${media.smallDesktop`
    left: ${0.5 * 0.8 * 95}vw;
  `}
  ${media.tablet`
    left: ${0.5 * 95}vw;
    padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.md};
  `}
  ${media.phone`
    left: ${0.5 * 100}vw;
    padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.md};
  `}
`;

export {
  Banner,
};
