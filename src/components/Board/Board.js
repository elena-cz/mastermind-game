import React from 'react';
import PropTypes from 'prop-types';
import Round from 'components/Round';
import { Container } from './styled';

function Board({ currentRoundId, rounds, colors, handleNewGuess, pegWidthEm }) {
  return (
    <Container>
      {rounds.map(round => (
        <Round
          key={round.id}
          id={round.id}
          guessPegs={round.guessPegs}
          keyPegs={round.keyPegs}
          isCurrentRound={currentRoundId === round.id}
          colors={colors}
          handleNewGuess={handleNewGuess}
          pegWidthEm={pegWidthEm}
        />
      ))}
    </Container>
  );
}

Board.propTypes = {
  currentRoundId: PropTypes.number.isRequired,
  rounds: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    guessPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
    keyPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleNewGuess: PropTypes.func.isRequired,
  pegWidthEm: PropTypes.number.isRequired,
};


export default Board;
