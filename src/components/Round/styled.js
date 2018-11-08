import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacer.md} 0;
`;

const RoundNum = styled.p`
  width: 2em;
  text-align: center;
  margin: 0 ${props => props.theme.spacer.lg} 0 0;
  color: ${props => props.theme.mediumGray};
`;

const GuessPegs = styled.div`
  display: flex;
  align-items: center;
  justify-content: middle;
  flex-wrap: no-wrap;
`;

const KeyPegs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  height: 2.5em;
  width: 7em;
`;

const KeyPegContainer = styled.div`
  align-self: ${props => props.index % 2 === 0 ? 'flex-start' : 'flex-end'};
  display: flex;
  align-items: center;
  justify-content: middle;
  min-width: 1em;
  min-height: 1em;
`;

const KeyPeg = styled.div`
  background-color: ${props => props.theme[props.color || 'mediumGray']};
  min-height: ${props => props.color ? '1em' : '0.5em'};
  min-width: ${props => props.color ? '1em' : '0.5em'};
  border-radius: 50%;
  border: none;
`;


export { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg };
