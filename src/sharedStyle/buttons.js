import styled from 'styled-components/macro';

const OutlineButton = styled.button`
  padding: 0.25em 1em;
  background-color: white;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 1em;
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  &:focus {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
`;

export { OutlineButton };
