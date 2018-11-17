import styled from 'styled-components/macro';
import { H2 } from 'sharedStyle/typography';
import media from 'sharedStyle/utils/media';


const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

// const RulesHeading = styled(H2)``;

const RulesButtonContainer = styled.button.attrs({
  'aria-expanded': props => props.isRulesExpanded ? 'true' : 'false',
})`
  margin: 0;
  background-color: transparent;
  border: none;
  font-weight: 300;
  text-transform: uppercase;
  ${media.fontSizing(2.2)}
`;
const ExpandIcon = styled.div.attrs({
  'aria-hidden': 'true',
  focusable: 'false',
})`
`;

const RulesTextContainer = styled.div.attrs({
})`
`;
  // hidden: props => props.isRulesExpanded ? 'false' : 'true',


export { Container, RulesButtonContainer, ExpandIcon, RulesTextContainer };
