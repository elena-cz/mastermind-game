import styled, { keyframes } from 'styled-components/macro';
import media from 'sharedStyle/utils/media';


const pegRadius = 24;
const pathRadius = 2 * pegRadius;
const strokeWidth = 1.3 * pegRadius;
const viewBoxWidth = 2 * pathRadius + strokeWidth;
const viewBoxHeight = pathRadius + (strokeWidth / 2);
const angleInDeg = 20;
const convertToRadians = angle => angle * (Math.PI / 180);
const movePathXDistance = pathRadius - (Math.sin(convertToRadians(180 - 90 - angleInDeg)) * pathRadius);
const movePathYDistance = Math.sin(convertToRadians(angleInDeg)) * pathRadius;
const pathStartX = 0 + (strokeWidth / 2) + movePathXDistance;
const pathStartY = viewBoxHeight - movePathYDistance;
const pathEndX = 2 * pathRadius + (strokeWidth / 2) - movePathXDistance;
const pathEndY = pathStartY;

const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
const path = `M ${pathStartX} ${pathStartY} A ${pathRadius} ${pathRadius} 0 0 1 ${pathEndX} ${pathEndY}`;


const Container = styled.div`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  position: absolute;
  bottom: ${pegRadius}px;
  left: -${viewBoxWidth / 2 - pegRadius}px;
  height: ${viewBoxHeight}px;
  width: ${viewBoxWidth}px;
  z-index: 100;
`;

  // ${Peg}:hover & {
  //   display: block;
  // }

const ViewBox = styled.svg.attrs({
  viewBox,
})`
  position: relative;
  height: ${viewBoxHeight}px;
  width: ${viewBoxWidth}px;
  filter: drop-shadow(1px 2px 4px ${props => props.theme.mediumGray});
`;

const CurvePath = styled.path.attrs({
  d: path,
  stroke: 'white',
  fill: 'none',
})`
  stroke-width: ${strokeWidth};
  stroke-linecap: round;
`;

const ColorDot = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  offset-path: path("${path}");
  offset-distance: ${props => props.distance}%;
  width: 1.4em;
  height: 1.4em;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme[props.color]};
  z-index: 200;

  &:hover {
    transform: scale(1.3);
  }
`;


export { Container, ViewBox, CurvePath, ColorDot };
