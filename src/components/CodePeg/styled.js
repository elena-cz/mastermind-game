import styled from 'styled-components/macro';

const Peg = styled.button`
  background-color: ${props => props.theme[props.color || 'mediumGray']};
  min-height: 3em;
  min-width: 3em;
  margin: 0 ${props => props.theme.spacer.lg} 0 0;
  border-radius: 50%;
  border: none;
`;

export { Peg };
