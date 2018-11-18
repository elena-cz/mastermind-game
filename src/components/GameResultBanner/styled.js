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

const BannerContainer = styled.div`
  visibility: ${props => props.showBanner ? 'visible' : 'hidden'};
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: ${props => props.theme.grid.largeDesktop.percent / 100 * props.theme.grid.largeDesktop.vw}vw;
  z-index: 100;
  ${props => props.showBanner ? animation : ''}

  ${media.smallDesktop`
    left: calc(${props => props.theme.grid.smallDesktop.vw * 0.5}vw - 10rem);
  `}
  ${media.phone`
    left: calc(${props => props.theme.grid.phone.vw * 0.5}vw - 10rem);
    padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.md};
  `}
`;

const Banner = styled(H2)`
  display: block;
  box-sizing: border-box;
  padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.lg};
  margin: ${props => props.theme.spacers.sm};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.userWon ? props.theme.colors.primary : props.theme.colors.red};
  border-radius: 0.5em;
  text-align: center;
  color: ${props => props.userWon ? props.theme.colors.primary : props.theme.colors.red};

  ${media.phone`
    padding: ${props => props.theme.spacers.sm} ${props => props.theme.spacers.md};
  `}
`;

export {
  BannerContainer,
  Banner,
};
