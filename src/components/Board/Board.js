import React from 'react';
import PropTypes from 'prop-types';
import Round from 'components/Round';
import Secret from 'components/Secret';
import { Container } from './styled';

function Board(props) {

  const {
    currentRoundId,
    rounds,
    colors,
    handleNewGuess,
    pegWidth,
    secretPegs,
    userWon,
    userLost,
  } = props;

  return (
    <div>
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
      <Secret
        pegWidth={pegWidth}
        secretPegs={secretPegs}
        userWon={userWon}
        userLost={userLost}
      />
    </div>
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
  secretPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
  userWon: PropTypes.bool.isRequired,
  userLost: PropTypes.bool.isRequired,
};


export default Board;
