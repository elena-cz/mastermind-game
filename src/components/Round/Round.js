import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodePeg from 'components/CodePeg';
import { Container, RoundNum, GuessPegs, KeyPegs, KeyPegContainer, KeyPeg } from './styled';


class Round extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { id, guessPegs, keyPegs, isCurrentRound } = this.props;
    return (
      <Container>
        <RoundNum>{id}</RoundNum>
        <GuessPegs>
          {guessPegs.map((peg, index) => (
            <CodePeg
              color={peg}
              onClick={e => console.log(index, 'peg clicked')}
              disabled={!isCurrentRound}
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
