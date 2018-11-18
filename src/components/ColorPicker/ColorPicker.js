import React from 'react';
import PropTypes from 'prop-types';
import { Container, ViewBox, CurvePath, ColorDot } from './styled';

function ColorPicker({ isVisible, colors, updatePegColor, pegIndex, pegWidth }) {

  const pegRadius = Math.round(pegWidth / 2);
  const pathRadius = 2.5 * pegRadius;
  const strokeWidth = Math.round(1.3 * pegRadius);
  const colorDotWidth = Math.round(pegWidth / 2.3);

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


  return (
    <Container
      isVisible={isVisible}
      pegRadius={pegRadius}
      viewBoxWidth={viewBoxWidth}
      viewBoxHeight={viewBoxHeight}
    >
      <ViewBox
        viewBox={viewBox}
        viewBoxWidth={viewBoxWidth}
        viewBoxHeight={viewBoxHeight}
      >
        <CurvePath
          path={path}
          strokeWidth={strokeWidth}
        />
      </ViewBox>

      {colors.map((color, index) => (
        <ColorDot
          color={color}
          distance={index * 20}
          path={path}
          colorDotWidth={colorDotWidth}
          onClick={() => updatePegColor(color, pegIndex)}
        />
      ))}
    </Container>
  );
}

ColorPicker.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  updatePegColor: PropTypes.func.isRequired,
  pegIndex: PropTypes.number.isRequired,
  pegWidth: PropTypes.number.isRequired,
};

export default ColorPicker;
