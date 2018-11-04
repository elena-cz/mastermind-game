import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.spacer.md} 0;
`;

const RoundNum = styled.p`
  width: 2em;
  text-align: center;
  margin: 0 ${props => props.theme.spacer.lg} 0 0;
  color: ${props => props.theme.mediumGray};
`;


export { Container, RoundNum };
