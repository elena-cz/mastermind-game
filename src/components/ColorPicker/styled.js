import styled, { keyframes } from 'styled-components/macro';
import media from 'sharedStyle/utils/media';


const pegRadius = 16;
const pathRadius = 3.5 * pegRadius;
const strokeWidth = 2 * pegRadius;
const viewBoxWidth = 2 * pathRadius + strokeWidth;
const viewBoxHeight = pathRadius + (strokeWidth / 2);
const angleInDeg = 25;
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
  position: relative;
  height: ${viewBoxHeight}px;
  width: ${viewBoxWidth}px;
`;

const ViewBox = styled.svg.attrs({
  viewBox,
})`
`;

const CurvePath = styled.path.attrs({
  d: path,
  stroke: 'blue',
  fill: 'none',
})`
  stroke-width: ${strokeWidth};
  stroke-linecap: round;
`;

const ColorDot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  offset-path: path("${path}");
  offset-distance: ${props => props.distance}%;
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  background: yellow;
  z-index: 2;
`;

const Peg = styled.button`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: ${props => props.color ? '3em' : '2em'};
  min-width: ${props => props.color ? '3em' : '2em'};
  margin: 0;
  background-color: ${props => props.theme[props.color || 'mediumGray']};
  border-radius: 50%;
  border: none;
`;


export { Container, ViewBox, CurvePath, ColorDot, Peg };

