import React from 'react';
import PropTypes from 'prop-types';
import Round from 'components/Round';
import { Container } from './styled';

function Board({ currentRoundId, rounds, colors, handleNewGuess, pegWidth }) {
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
          pegWidth={pegWidth}
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
  pegWidth: PropTypes.number.isRequired,
};


export default Board;
