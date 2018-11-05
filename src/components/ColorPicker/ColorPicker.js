import React from 'react';
import PropTypes from 'prop-types';
import { Container, CurvedContainer, CurvedOffset, CircleSVG, CircleBackground, Peg} from './styled';

function ColorPicker(props) {
  return (
    <Container>
      <CircleSVG>
        <CircleBackground />
      </CircleSVG>
      <Peg color="purple" />
    </Container>
  );
}

ColorPicker.propTypes = {};

export default ColorPicker;

// <CurvedContainer viewBox="0 0 128 64">
//         <path
//           d="M27.8,41.1a41,41,0,0,1,6.5-8.4A41.9,41.9,0,0,1,64,20.4m36.2,20.7a41,41,0,0,0-6.5-8.4A41.9,41.9,0,0,0,64,20.4"
//           className="path"
//           fill="none"
//           strokeWidth="32px"
//         />
//       </CurvedContainer>

//       <CurvedOffset />