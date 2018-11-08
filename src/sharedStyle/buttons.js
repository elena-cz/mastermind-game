import styled from 'styled-components/macro';

const OutlineButton = styled.button`
  padding: 0.25em 1em;
  background-color: white;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 1em;
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${props => props.theme.primaryColor};

  &:hover {
    background-color: ${props => props.theme.lightPrimaryColor};
  }
`;

export { OutlineButton };
