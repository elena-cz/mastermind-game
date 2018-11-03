import { css } from 'styled-components/macro';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});

media.padding = css`
  padding: ${props => props.theme.spacer.lg};
  ${media.tablet`
    padding: ${props => props.theme.spacer.md};
  `}
  ${media.phone`
    padding: ${props => props.theme.spacer.sm};
  `}
`;

media.fontSizing = fontSize => css`
  font-size: ${fontSize}em;
  ${media.tablet`
    font-size: ${fontSize * 0.8}em;
  `}
  ${media.phone`
    font-size: ${fontSize * 0.6}em;
  `}
`;

export default media;
