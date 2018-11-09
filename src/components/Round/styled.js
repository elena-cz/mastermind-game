import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacers.md} 0;
`;

const RoundNum = styled.p`
  width: 2em;
  text-align: center;
  margin: 0 ${props => props.theme.spacers.lg} 0 0;
  color: ${props => props.theme.colors.mediumGray};
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
  height: ${props => props.pegWidth}px;
  width: 7em;
`;


const KeyPegContainer = styled.div`
  align-self: ${props => props.index % 2 === 0 ? 'flex-start' : 'flex-end'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.pegWidth / 3}px;
  min-height: ${props => props.pegWidth / 3}px;
`;

const KeyPeg = styled.div`
  background-color: ${props => props.theme.colors[props.color || 'mediumGray']};
  min-height: ${props => props.color ? props.pegWidth / 3 : props.pegWidth / 6}px;
  min-width: ${props => props.color ? props.pegWidth / 3 : props.pegWidth / 6}px;
  border-radius: 50%;
  border: none;
`;


export { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg };
