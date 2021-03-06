import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { H2 } from 'sharedStyle/typography';
import { Container, RoundNum, GuessPegs, KeyPegs } from 'components/Round/styled';
import { PegContainer, Peg } from 'components/CodePeg/styled';
import visibilityIcon from 'assets/visibility-icon.svg';


const SecretContainer = styled(Container)`
  position: fixed;
  z-index: 200;
  bottom: 0;
  width: ${props => props.theme.grid.largeDesktop.percent / 100 * props.theme.grid.largeDesktop.vw}vw;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mediumGray};
  box-shadow: ${props => props.theme.boxShadow};

  ${media.smallDesktop`
    width: ${props => props.theme.grid.smallDesktop.vw}vw;
  `}
  ${media.phone`
    width: ${props => props.theme.grid.phone.vw}vw;
  `}
`;

const Cover = styled.div`
  position: absolute;
  right: 0;
  z-index: 300;
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


const CoverText = styled(H2)`
  position: absolute;
  display: block;
  z-index: 400;
  opacity: ${props => (props.userWon || props.userLost) ? 0 : 1};
  color: ${props => props.theme.colors.mediumGray};
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  transition-delay: ${props => (props.userWon || props.userLost) ? 0 : '2s'};
`;

const RevealContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: ${props => props.theme.spacers.sm};
  opacity: ${props => (props.userWon || props.userLost) ? 0 : 1};
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  transition-delay: ${props => (props.userWon || props.userLost) ? 0 : '2s'};
`;

const RevealIconButton = styled.button.attrs({
  'aria-labelledby': 'reveal-icon-tooltip',
})`
  width: 1.5em;
  height: 1.5em;
  margin-left: ${props => props.theme.spacers.sm};
  background-image: url(${visibilityIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;

`;
  // ${media.tablet`
  //   width: 1.6em;
  //   height: 1.6em;
  // `}
  // ${media.phone`
  //   width: 1.2em;
  //   height: 1.2em;
  // `}

const RevealTooltip = styled.div.attrs({
  role: 'tooltip',
  id: 'reveal-icon-tooltip',
})`
  display: none;
  position: relative;
  padding: ${props => props.theme.spacers.xs};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  box-shadow: ${props => props.theme.boxShadow}; 
  font-size: 0.8em;
  z-index: 500;

  ${RevealContainer}:hover & {
    display: block;
  }

  ${media.phone`
    width: 7em;
  `}
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
  RevealContainer,
  RevealIconButton,
  RevealTooltip,
  SecretPegs,
  SecretPegContainer,
  SecretPeg,
  LeftSpace,
  RightSpace,
};
