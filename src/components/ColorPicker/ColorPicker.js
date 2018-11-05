import React from 'react';
import PropTypes from 'prop-types';
import { Container, ViewBox, CurvePath, ColorDot, Peg } from './styled';

function ColorPicker(props) {
  return (
    <Container>
      <ViewBox>
        <CurvePath />
      </ViewBox>
      <ColorDot distance={0} />
      <ColorDot distance={20} />
      <ColorDot distance={40} />
      <ColorDot distance={60} />
      <ColorDot distance={80} />
      <ColorDot distance={100} />
      <Peg color="purple" />
    </Container>
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;
