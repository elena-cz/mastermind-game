import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodePeg from 'components/CodePeg';
import { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg, SubmitButton } from './styled';


class Round extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guessColors: new Array(props.guessPegs.length).fill(''),
      indexOfVisibleColorPicker: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { secretPegs } = this.props;
    if (secretPegs !== prevProps.secretPegs) {
      this.resetGuessColors();
    }
  }

  resetGuessColors = () => {
    const { guessPegs } = this.props;
    const guessColors = new Array(guessPegs.length).fill('');
    this.setState({ guessColors });
  }

  showColorPicker = (indexOfPeg) => {
    this.setState({ indexOfVisibleColorPicker: indexOfPeg });
  }

  hideColorPicker = () => {
    this.setState({ indexOfVisibleColorPicker: null });
  }

  updatePegColor = (color, indexOfPeg) => {
    this.setState((state) => {
      const guessColors = [...state.guessColors];
      guessColors[indexOfPeg] = color;
      return { guessColors };
    });
  }

  handlePegClick = (color, indexOfPeg) => {
    if (color) {
      this.updatePegColor('', indexOfPeg);
    }
    this.showColorPicker(indexOfPeg);
  }

  render() {
    const { id, guessPegs, keyPegs, isCurrentRound, colors, handleNewGuess, pegWidth } = this.props;
    const { guessColors, indexOfVisibleColorPicker } = this.state;
    const { handlePegClick, showColorPicker, hideColorPicker, updatePegColor } = this;

    return (
      <Container pegWidth={pegWidth}>
        <RoundNum>{id}</RoundNum>
        <GuessPegs>
          {guessPegs.map((color, index) => (
            <CodePeg
              color={color || guessColors[index]}
              disabled={!isCurrentRound}
              index={index}
              indexOfVisibleColorPicker={indexOfVisibleColorPicker}
              handlePegClick={handlePegClick}
              showColorPicker={showColorPicker}
              hideColorPicker={hideColorPicker}
              updatePegColor={updatePegColor}
              colors={colors}
              pegWidth={pegWidth}
            />
          ))}
        </GuessPegs>

        <KeyPegs pegWidth={pegWidth}>
          {isCurrentRound ? (
            <SubmitButton
              onClick={() => handleNewGuess(guessColors)}
              pegWidth={pegWidth}
            >
              Submit
            </SubmitButton>
          ) : (
            keyPegs.map((peg, index) => (
              <KeyPegContainer
                index={index}
                pegWidth={pegWidth}
              >
                <KeyPeg
                  color={peg}
                  pegWidth={pegWidth}
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
  pegWidth: PropTypes.number.isRequired,
  secretPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Round;
