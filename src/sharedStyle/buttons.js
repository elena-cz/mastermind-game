import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const PrimaryButton = styled.button`
  padding: 0.25em 1em;
  background-color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1em;
  font-size: 1.3em;
  line-height: 1.3em;
  text-transform: uppercase;
  color: white;

  &:hover, &:focus {
    color: ${props => props.theme.colors.lightPrimary};
  }

  ${media.phone`
    font-size: 1.1em;
    line-height: 1em;
    padding: 0.25em 0.5em;
  `}
`;
  // ${media.tablet`
  //   font-size: 1.1em;
  //   line-height: 1.1em;
  //   padding: 0.25em 1em;
  // `}


const OutlineButton = styled.button`
  padding: 0.25em 1em;
  background-color: white;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1em;
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

`;
    // ${media.phone`
    //   font-size: 1em;
    //   padding: 0.25em 0.5em;
    // `}
  // ${media.phone`
  //   font-size: 0.8em;
  //   padding: 0.25em 0.3em;
  // `}
  // ${media.tablet`
  //   font-size: 1em;
  //   line-height: 1em;
  //   padding: 0.25em 0.5em;
  // `}
  // ${media.phone`
  //   font-size: 0.8em;
  //   line-height: 0.8em;
  //   padding: 0.25em 0.3em;
  // `}
  // ${media.smallPhone`
  //   font-size: 0.7em;
  //   line-height: 0.7em;
  //   padding: 0.25em 0.3em;
  // `}


const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.8em;
  width: 1.8em;
  padding: 0.25em .25em;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 50%;
  font-size: 1.3em;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.black};

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${media.phone`
    height: 1.6em;
    width: 1.6em;
    font-size: 1.1em;
  `}
`;
  // ${media.tablet`
  //   height: 1.6em;
  //   width: 1.6em;
  //   font-size: 1.1em;
  // `}


export { PrimaryButton, OutlineButton, RoundButton };
