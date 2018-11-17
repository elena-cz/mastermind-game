import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

const H1 = styled.h1`
  margin: 0;
  font-size: 3em;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 2;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 400;
  text-transform: uppercase;
`;

const H4 = styled.h4`
  margin: 0;
  font-weight: 400;
  text-transform: uppercase;
`;

const P = styled.p`
  margin-top: 0.25em;
  margin-bottom: 1em;
  font-weight: 300;
`;

const Small = styled.small`
  font-weight: 300;
  color: ${props => props.theme.colors.darkGray};
`;

const Semibold = styled.span`
  font-weight: 400;
`;

const Ul = styled.ul`
  margin-top: 0.25em;
  margin-bottom: 1em;
  padding-left: 1.5em;
`;

const Li = styled.li`
  list-style-type: none;
  padding-bottom: 0.5em;
  font-weight: 300;
`;


export { H1, H2, H3, H4, P, Small, Semibold, Ul, Li };
