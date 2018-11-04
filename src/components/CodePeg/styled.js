import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: middle;
  min-height: 3em;
  min-width: 3em;
  margin: 0 ${props => props.theme.spacer.lg} 0 0;
`;

const Peg = styled.button`
  margin: auto;
  background-color: ${props => props.theme[props.color || 'mediumGray']};
  min-height: ${props => props.color ? '3em' : '2em'};
  min-width: ${props => props.color ? '3em' : '2em'};
  border-radius: 50%;
  border: none;
`;

export { Container, Peg };
