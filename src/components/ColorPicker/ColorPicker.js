import React from 'react';
import PropTypes from 'prop-types';
import { Container, ColorContainer, ViewBox, CurvePath, ColorDot, Peg } from './styled';

function ColorPicker(props) {
  return (
    <Container>
      <ColorContainer>
     
        <ViewBox>
          <CurvePath />
        </ViewBox>

        <ColorDot distance={0} />
        <ColorDot distance={20} />
        <ColorDot distance={40} />
        <ColorDot distance={60} />
        <ColorDot distance={80} />
        <ColorDot distance={100} />
      </ColorContainer>
      <Peg color="purple" />
    </Container>
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;
