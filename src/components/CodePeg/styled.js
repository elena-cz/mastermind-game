import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const PegContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.pegWidthEm}em;
  min-width: ${props => props.pegWidthEm}em;
  margin: 0 ${props => props.theme.spacers.lg} 0 0;
`;

const Peg = styled.button`
  background-color: ${props => props.theme.colors[props.color || 'mediumGray']};
  min-height: ${props => props.color ? props.pegWidthEm : props.pegWidthEm * 0.6}em;
  min-width: ${props => props.color ? props.pegWidthEm : props.pegWidthEm * 0.6}em;
  border-radius: 50%;
  border: none;
`;

export { Container, PegContainer, Peg };
