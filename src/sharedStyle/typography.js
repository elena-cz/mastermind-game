import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const H1 = styled.h1`
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  ${media.fontSizing(2.5)}
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  ${media.fontSizing(2.2)}
`;

export { H1, H2 };
