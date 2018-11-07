import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodePeg from 'components/CodePeg';
import { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg } from './styled';


class Round extends Component {

  constructor(props) {
    super(props);
    this.state = {
      indexOfVisibleColorPicker: null,
    };
  }

  showColorPicker = (indexOfPeg) => {
    this.setState({ indexOfVisibleColorPicker: indexOfPeg });
  }

  hideColorPicker = () => {
    this.setState({ indexOfVisibleColorPicker: null });
  }

  render() {
    const { id, guessPegs, keyPegs, isCurrentRound } = this.props;
    const { indexOfVisibleColorPicker } = this.state;
    const { showColorPicker, hideColorPicker } = this;

    return (
      <Container>
        <RoundNum>{id}</RoundNum>
        <GuessPegs>
          {guessPegs.map((peg, index) => (
            <CodePeg
              color={peg}
              disabled={!isCurrentRound}
              index={index}
              indexOfVisibleColorPicker={indexOfVisibleColorPicker}
              showColorPicker={showColorPicker}
              hideColorPicker={hideColorPicker}
            />
          ))}
        </GuessPegs>

        <KeyPegs>
          {keyPegs.map((peg, index) => (
            <KeyPegContainer index={index}>
              <KeyPeg color={peg} />
            </KeyPegContainer>
          ))}
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
};

export default Round;
