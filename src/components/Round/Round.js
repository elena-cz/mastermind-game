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

  componentDidUpdate(prevProps) {
    const { secretPegs, guessPegs, isCurrentRound } = this.props;
    if (secretPegs !== prevProps.secretPegs) {
      const guessColors = new Array(guessPegs.length).fill('');
      this.setState({ guessColors });
    }
  }

  showColorPicker = (indexOfPeg) => {
    this.setState({ indexOfVisibleColorPicker: indexOfPeg });
  }

  hideColorPicker = () => {
    this.setState({ indexOfVisibleColorPicker: null });
  }

  updatePegColor = (color, index) => {
    this.setState((state) => {
      const guessColors = [...state.guessColors];
      guessColors[index] = color;
      return { guessColors };
    });
  }

  render() {
    const { id, guessPegs, keyPegs, isCurrentRound, colors, handleNewGuess, pegWidth } = this.props;
    const { guessColors, indexOfVisibleColorPicker } = this.state;
    const { showColorPicker, hideColorPicker, updatePegColor } = this;

    return (
      <Container isCurrentRound={isCurrentRound}>
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
              pegWidth={pegWidth}
            />
          ))}
        </GuessPegs>

        <KeyPegs pegWidth={pegWidth}>
          {isCurrentRound ? (
            <OutlineButton onClick={() => handleNewGuess(guessColors)}>
              Submit
            </OutlineButton>
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
