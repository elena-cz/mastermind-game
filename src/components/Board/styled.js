import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const Container = styled.main`
  grid-area: board;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 20em;
  min-width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: 1px 2px 4px #bdbdbd;
`;

export { Container };
