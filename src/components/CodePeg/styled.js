import styled from 'styled-components/macro';

const Peg = styled.button`
  background-color: ${props => props.color};
  height: 2em;
  width: 2em;
  border-radius: 50%;
  border: none;
`;

export { Peg };
