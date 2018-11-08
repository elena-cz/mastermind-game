import React from 'react';
import PropTypes from 'prop-types';
import ColorPicker from 'components/ColorPicker';
import { Container, PegContainer, Peg } from './styled';

function CodePeg(props) {

  const {
    color,
    disabled,
    index,
    indexOfVisibleColorPicker,
    showColorPicker,
    hideColorPicker,
    updatePegColor,
    colors,
  } = props;

  const shouldShowColorPicker = !disabled && index === indexOfVisibleColorPicker;

  return (
    <Container>
      <ColorPicker
        isVisible={shouldShowColorPicker}
        colors={colors}
        updatePegColor={updatePegColor}
        pegIndex={index}
      />
      <PegContainer>
        <Peg
          color={color}
          onMouseEnter={() => showColorPicker(index)}
          onFocus={() => showColorPicker(index)}
          onClick={() => showColorPicker(index)}
          disabled={disabled}
        />
      </PegContainer>
    </Container>
  );

}

CodePeg.propTypes = {
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  indexOfVisibleColorPicker: PropTypes.number,
  showColorPicker: PropTypes.func.isRequired,
  hideColorPicker: PropTypes.func.isRequired,
  updatePegColor: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CodePeg.defaultProps = {
  indexOfVisibleColorPicker: null,
};

export default CodePeg;
