import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';


const Container = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
  position: absolute;
  bottom: ${props => props.pegRadius}px;
  height: ${props => props.viewBoxHeight}px;
  width: ${props => props.viewBoxWidth}px;
  z-index: 100;

  ${media.phone`
    bottom: ${props => props.pegRadius * 1.75}px;
  `}
`;
  // opacity: ${props => props.isVisible ? 1 : 0.8};
  // transition: visibility 0s 0s, opacity .2s ease-in-out;

const ViewBox = styled.svg.attrs({
  viewBox: props => props.viewBox,
})`
  position: relative;
  height: ${props => props.viewBoxHeight}px;
  width: ${props => props.viewBoxWidth}px;
  filter: drop-shadow(${props => props.theme.boxShadow});
`;

const CurvePath = styled.path.attrs({
  d: props => props.path,
  stroke: 'white',
  fill: 'none',
})`
  stroke-width: ${props => props.strokeWidth};
  stroke-linecap: round;
`;

const ColorDot = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  offset-path: path("${props => props.path}");
  offset-distance: ${props => props.distance}%;
  width: ${props => props.colorDotWidth}px;
  height: ${props => props.colorDotWidth}px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.colors[props.color]};
  z-index: 200;

  &:hover {
    transform: scale(1.3);
  }
  &:focus {
    outline:0;
  }
`;


export { Container, ViewBox, CurvePath, ColorDot };
