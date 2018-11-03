import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const H1 = styled.h1`
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  ${media.fontSizing(2.5)}
`;
// const H1 = styled.h1`
//   margin: 0;
//   font-size: 2.5em;
//   font-weight: 300;
//   text-transform: uppercase;

//   ${media.tablet`
//     font-size: 2em;
//   `}
//   ${media.phone`
//     font-size: 1.5em;
//   `}
// `;

export { H1 };
