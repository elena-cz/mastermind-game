import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

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

  ${media.tablet`
    font-size: 1em;
    padding: 0.25em 0.75em;
  `}
  ${media.phone`
    font-size: 0.8em;
    padding: 0.2em 0.5em;
  `}
`;

export { OutlineButton };
