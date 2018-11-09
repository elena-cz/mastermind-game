import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Container = styled.main`
  grid-area: board;
  display: flex;
  flex-direction: column;
  min-height: 20em;
  min-width: 80%;
  background-color: ${props => props.theme.colors.lightGray};
  ${media.padding}
`;

export { Container };
