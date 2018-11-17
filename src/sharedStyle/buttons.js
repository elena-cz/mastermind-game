import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const PrimaryButton = styled.button`
  padding: 0.25rem 1rem;
  background-color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1rem;
  font-size: 1.3rem;
  line-height: 1.3rem;
  text-transform: uppercase;
  color: white;

  &:hover, &:focus {
    color: ${props => props.theme.colors.lightPrimary};
  }

  ${media.tablet`
    font-size: 1.1rem;
    line-height: 1.1rem;
    padding: 0.25rem 1rem;
  `}
  ${media.phone`
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.25rem 0.5rem;
  `}
`;


const OutlineButton = styled.button`
  padding: 0.25rem 1rem;
  background-color: white;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${media.tablet`
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.25rem 0.5rem;
  `}
  ${media.phone`
    font-size: 0.8rem;
    line-height: 0.8rem;
    padding: 0.25rem 0.3rem;
  `}
  ${media.smallPhone`
    font-size: 0.7rem;
    line-height: 0.7rem;
    padding: 0.25rem 0.3rem;
  `}
`;


const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.8rem;
  width: 1.8rem;
  padding: 0.25rem .25rem;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 50%;
  font-size: 1.3rem;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.black};

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${media.tablet`
    height: 1.6rem;
    width: 1.6rem;
    font-size: 1.1rem;
  `}
  ${media.phone`
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1rem;
  `}
`;


export { PrimaryButton, OutlineButton, RoundButton };
