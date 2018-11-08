import React from 'react';
import PropTypes from 'prop-types';
import { Container, ViewBox, CurvePath, ColorDot } from './styled';

function ColorPicker({ isVisible, colors, updatePegColor, pegIndex }) {
  return (
    <Container
      isVisible={isVisible}
    >
      <ViewBox>
        <CurvePath />
      </ViewBox>

      {colors.map((color, index) => (
        <ColorDot
          color={color}
          distance={index * 20}
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
};

export default ColorPicker;
