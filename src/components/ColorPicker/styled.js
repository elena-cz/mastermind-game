import styled from 'styled-components/macro';


// const pegRadius = 24;
// const pathRadius = 1.75 * pegRadius;
// const strokeWidth = 1.2 * pegRadius;
// const viewBoxWidth = 2 * pathRadius + strokeWidth;
// const viewBoxHeight = pathRadius + (strokeWidth / 2);
// const angleInDeg = 20;
// const convertToRadians = angle => angle * (Math.PI / 180);
// const movePathXDistance = pathRadius - (Math.sin(convertToRadians(180 - 90 - angleInDeg)) * pathRadius);
// const movePathYDistance = Math.sin(convertToRadians(angleInDeg)) * pathRadius;
// const pathStartX = 0 + (strokeWidth / 2) + movePathXDistance;
// const pathStartY = viewBoxHeight - movePathYDistance;
// const pathEndX = 2 * pathRadius + (strokeWidth / 2) - movePathXDistance;
// const pathEndY = pathStartY;

// const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
// const path = `M ${pathStartX} ${pathStartY} A ${pathRadius} ${pathRadius} 0 0 1 ${pathEndX} ${pathEndY}`;


const Container = styled.div`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  position: absolute;
  bottom: ${props => props.pegRadius}px;
  height: ${props => props.viewBoxHeight}px;
  width: ${props => props.viewBoxWidth}px;
  z-index: 100;
  opacity: ${props => props.isVisible ? 1 : 0.8};
  transition: visibility 0s 0s, opacity .2s ease-in-out;
`;
  // left: -${props => props.viewBoxWidth / 2 - props.pegRadius}px;

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
