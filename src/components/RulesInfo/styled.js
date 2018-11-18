import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import expandIcon from 'assets/expand-less-icon.svg';


const Zippy = styled.section`
  padding-bottom: ${props => props.theme.spacers.md};
`;


const ZippyButtonContainer = styled.button.attrs({
  'aria-expanded': props => props.isExpanded ? 'true' : 'false',
})`
  margin: 0;
  background-color: transparent;
  border: none;
  font-weight: inherit;
  text-transform: inherit;
`;


const ZippyHeading = styled.span`
  margin-left: 0.5rem;
`;

const ExpandIcon = styled.div.attrs({
  'aria-hidden': 'true',
  focusable: 'false',
})`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-image: url(${expandIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  background-position: center; 
  transform: rotate(${props => props.isExpanded ? '0' : '180'}deg);
  transform-origin: center;
  transition: transform 0.2s;

`;

const ZippyTextContainer = styled.div.attrs({
})`
  padding-top: 1em;
  padding-left: 2rem;
`;

const Table = styled.table`
  border: none;
`;

const Th = styled.th`
  padding-right: ${props => props.theme.spacers.sm};
  font-weight: 400;
  text-align: left;
`;

const Td = styled.td`
  text-align: center;
`;

const Red = styled.span`
  color: ${props => props.theme.colors.red};
`;

const Orange = styled.span`
  color: ${props => props.theme.colors.orange};
`;

const Yellow = styled.span`
  color: ${props => props.theme.colors.yellow};
`;

const Green = styled.span`
  color: ${props => props.theme.colors.green};
`;

const Blue = styled.span`
  color: ${props => props.theme.colors.blue};
`;

const Purple = styled.span`
  color: ${props => props.theme.colors.purple};
`;


export {
  Zippy,
  ZippyHeading,
  ZippyButtonContainer,
  ExpandIcon,
  ZippyTextContainer,
  Table,
  Th,
  Td,
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Purple,
};
