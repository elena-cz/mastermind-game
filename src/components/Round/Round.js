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
    const { id, guessPegs } = this.props;
    return (
      <Container>
        <RoundNum>{id}</RoundNum>
        {guessPegs.map(peg => (
          <CodePeg color={peg} />
        ))}
      </Container>
    );
  }

}

Round.propTypes = {
  id: PropTypes.number.isRequired,
  guessPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Round;
