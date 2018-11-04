import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodePeg from 'components/CodePeg';
import { Container, RoundNum } from './styled';


class Round extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { id, guessPegs, isCurrentRound } = this.props;
    return (
      <Container>
        <RoundNum>{id}</RoundNum>
        {guessPegs.map((peg, index) => (
          <CodePeg
            key={index}
            color={peg}
            onClick={e => console.log(index, 'peg clicked')}
            disabled={!isCurrentRound}
          />
        ))}
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
