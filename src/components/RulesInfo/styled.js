import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import expandIcon from 'assets/expand-less-icon.svg';


const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;


const RulesButtonContainer = styled.button.attrs({
  'aria-expanded': props => props.isRulesExpanded ? 'true' : 'false',
})`
  margin: 0;
  background-color: transparent;
  border: none;
  font-weight: inherit;
  text-transform: inherit;
`;
  // font-size: 2.2rem;
  // ${media.tablet`
  //   font-size: 1.8rem;
  // `}
  // ${media.phone`
  //   font-size: 1.3rem;
  // `}

const RulesHeading = styled.span`
  margin-left: 0.5rem;
`;

const ExpandIcon = styled.div.attrs({
  'aria-hidden': 'true',
  focusable: 'false',
})`
  display: inline-block;
  width: 2.2rem;
  height: 2.2rem;
  background-image: url(${expandIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  background-position: center; 
  transform: rotate(${props => props.isRulesExpanded ? '0' : '180'}deg);
  transform-origin: center;
  transition: transform 0.2s;

`;
  // ${media.tablet`
  //   width: 1.8em;
  //   height: 1.8em;
  // `}
  // ${media.phone`
  //   width: 1.3em;
  //   height: 1.3em;
  // `}

const RulesTextContainer = styled.div.attrs({
})`
  padding-left: 2.7rem;
`;
  // ${media.tablet`
  //   padding-left: 2.3rem;
  // `}
  // ${media.phone`
  //   padding-left: 1.8rem;
  // `}


export { Container, RulesHeading, RulesButtonContainer, ExpandIcon, RulesTextContainer };
