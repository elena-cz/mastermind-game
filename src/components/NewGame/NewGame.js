import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton, RoundButton } from 'sharedStyle/buttons';
import { Container, NewGameButton, NumPegButton, Description } from './styled';

function NewGame({ newGame, numPegs }) {

  return (
    <Container>

      <NewGameButton>
        New Game
      </NewGameButton>


      <NumPegButton
        isCurrentNumPegs={numPegs === 4}
        onClick={() => newGame(4)}
      >
        4
      </NumPegButton>

      <NumPegButton
        isCurrentNumPegs={numPegs === 5}
        onClick={() => newGame(5)}
      >
        5
      </NumPegButton>

      <NumPegButton
        isCurrentNumPegs={numPegs === 6}
        onClick={() => newGame(6)}
      >
        6
      </NumPegButton>

      <Description>
        Pegs
      </Description>


    </Container>
  );
}

NewGame.propTypes = {
  newGame: PropTypes.func.isRequired,
  numPegs: PropTypes.number.isRequired,
};

export default NewGame;
