import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const PrimaryButton = styled.button`
  padding: 0.5em 1.5em;
  background-color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1em;
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;

  &:hover {

  }
  &:focus {
  }

  ${media.tablet`
    font-size: 1.2em;
    padding: 0.5em 1.25em;
  `}
  ${media.phone`
    font-size: 1em;
    padding: 0.4em 1em;
  `}
`;


const OutlineButton = styled.button`
  padding: 0.25em 1em;
  background-color: white;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1em;
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};

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

const RoundButton = styled.button`
  padding: 0.5em .5em;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 50%;
  font-size: 1.5em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
`;

export { PrimaryButton, OutlineButton };
