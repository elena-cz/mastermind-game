import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OutlineButton } from 'sharedStyle/buttons';
import CodePeg from 'components/CodePeg';
import { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg } from './styled';


class Round extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guessColors: new Array(props.guessPegs.length).fill(''),
      indexOfVisibleColorPicker: null,
    };
  }

  showColorPicker = (indexOfPeg) => {
    this.setState({ indexOfVisibleColorPicker: indexOfPeg });
  }

  hideColorPicker = () => {
    this.setState({ indexOfVisibleColorPicker: null });
  }

  updatePegColor = (color, index) => {
    console.log('change color', color, index);
    this.setState((state) => {
      const guessColors = [...state.guessColors];
      guessColors[index] = color;
      return { guessColors };
    });
  }

  render() {
    const { id, guessPegs, keyPegs, isCurrentRound, colors, handleNewGuess, pegWidthEm } = this.props;
    const { guessColors, indexOfVisibleColorPicker } = this.state;
    const { showColorPicker, hideColorPicker, updatePegColor } = this;

    return (
      <Container>
        <RoundNum>{id}</RoundNum>
        <GuessPegs>
          {guessPegs.map((color, index) => (
            <CodePeg
              color={color || guessColors[index]}
              disabled={!isCurrentRound}
              index={index}
              indexOfVisibleColorPicker={indexOfVisibleColorPicker}
              showColorPicker={showColorPicker}
              hideColorPicker={hideColorPicker}
              updatePegColor={updatePegColor}
              colors={colors}
              pegWidthEm={pegWidthEm}
            />
          ))}
        </GuessPegs>

        <KeyPegs pegWidthEm={pegWidthEm}>
          {isCurrentRound ? (
            <OutlineButton onClick={() => handleNewGuess(guessColors)}>
              Submit
            </OutlineButton>
          ) : (
            keyPegs.map((peg, index) => (
              <KeyPegContainer
                index={index}
                pegWidthEm={pegWidthEm}
              >
                <KeyPeg
                  color={peg}
                  pegWidthEm={pegWidthEm}
                />
              </KeyPegContainer>
            ))
          )}
        </KeyPegs>

      </Container>
    );
  }

}

Round.propTypes = {
  id: PropTypes.number.isRequired,
  guessPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCurrentRound: PropTypes.bool.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleNewGuess: PropTypes.func.isRequired,
  pegWidthEm: PropTypes.number.isRequired,
};

export default Round;
