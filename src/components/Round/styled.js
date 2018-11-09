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
  height: ${props => props.pegWidthEm}em;
  width: 7em;
`;

const keyPegWidth = width =>  Math.round(width / 3 * 10) / 10;

const KeyPegContainer = styled.div`
  align-self: ${props => props.index % 2 === 0 ? 'flex-start' : 'flex-end'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => keyPegWidth(props.pegWidthEm)}em;
  min-height: ${props => keyPegWidth(props.pegWidthEm)}em;
`;

const KeyPeg = styled.div`
  background-color: ${props => props.theme.colors[props.color || 'mediumGray']};
  min-height: ${props => props.color ? keyPegWidth(props.pegWidthEm): keyPegWidth(props.pegWidthEm) / 2}em;
  min-width: ${props => props.color ? keyPegWidth(props.pegWidthEm) : keyPegWidth(props.pegWidthEm)/ 2}em;
  border-radius: 50%;
  border: none;
`;


export { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg };
