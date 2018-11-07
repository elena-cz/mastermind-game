import React from 'react';
import PropTypes from 'prop-types';
import { Container, ViewBox, CurvePath, ColorDot } from './styled';

function ColorPicker({ isVisible }) {
  return (
    <Container
      isVisible={isVisible}
    >
      <ViewBox>
        <CurvePath />
      </ViewBox>

      <ColorDot distance={0} />
      <ColorDot distance={20} />
      <ColorDot distance={40} />
      <ColorDot distance={60} />
      <ColorDot distance={80} />
      <ColorDot distance={100} />
    </Container>
  );
}

ColorPicker.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default ColorPicker;
