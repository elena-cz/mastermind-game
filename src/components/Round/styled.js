import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { OutlineButton } from 'sharedStyle/buttons';

const Container = styled.div.attrs({
  id: props => props.isCurrentRound ? 'CurrentRound' : 'InactiveRound',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  min-height: 1.7em;
  padding: ${props => props.theme.spacers.md} 0;
`;

  // ${media.tablet`
  //   padding: ${props => props.theme.spacers.md} 0;
  // `}
  // ${media.phone`
  //   padding: ${props => props.theme.spacers.sm} 0;
  // `}

const RoundNum = styled.p`
  min-width: 1.2em;
  margin: 0 ${props => props.theme.spacers.lg} 0 0;
  text-align: center;
  color: ${props => props.theme.colors.mediumGray};

`;
  // ${media.tablet`
  //   width: 1.2em;
  //   margin: 0 ${props => props.theme.spacers.lg} 0 0;
  //   font-size: 1em;
  // `}
  // ${media.phone`
  //   min-width: 1em;
  //   margin: 0 ${props => props.theme.spacers.md} 0 0;
  //   font-size: 0.8em;
  // `}

const GuessPegs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  flex-grow: 1;
`;

const KeyPegs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.pegWidth}px;
  min-width: 6em;

  ${media.phone`
    min-width: 4em;
  `}
`;
  // ${media.tablet`
  //   width: 5.5em;
  // `}


const KeyPegContainer = styled.div`
  align-self: ${props => props.index % 2 === 0 ? 'flex-start' : 'flex-end'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => Math.round(props.pegWidth / 3)}px;
  min-height: ${props => Math.round(props.pegWidth / 3)}px;
`;

const KeyPeg = styled.div`
  background-color: ${props => props.theme.colors[props.color || 'mediumGray']};
  min-height: ${props => props.color ? Math.round(props.pegWidth / 3) : Math.round(props.pegWidth / 6)}px;
  min-width: ${props => props.color ? Math.round(props.pegWidth / 3) : Math.round(props.pegWidth / 6)}px;
  box-sizing: border-box;
  border-radius: 50%;
  border-style: solid;
  border-width: ${props => props.color ? 1 : 0}px;
  border-color: ${props => props.theme.black};
`;

const SubmitButton = styled(OutlineButton)`
  justify-self: center;
`;

export { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg, SubmitButton };
