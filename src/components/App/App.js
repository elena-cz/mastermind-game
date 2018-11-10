import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from 'sharedStyle/theme';
import GlobalStyle from 'sharedStyle/globalStyle';
import { H1 } from 'sharedStyle/typography';
import Board from 'components/Board';
import GameResultBanner from 'components/GameResultBanner';

import { Grid, Header, NewGame, Sidebar, Footer } from './styled';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      currentRoundId: 1,
      maxRounds: 10,
      numPegs: 4,
      rounds: [],
      secretPegs: [],
      userWon: false,
      userLost: false,
      pegWidth: theme.pegSizes.desktop,
    };
  }

  componentDidMount() {

    const desktopMaxWidth = window.matchMedia(`(min-width: ${theme.mediaSizes.desktop}px)`);
    const tabletMaxWidth = window.matchMedia(`(min-width: ${theme.mediaSizes.tablet}px)`);
    const phoneMaxWidth = window.matchMedia(`(min-width: ${theme.mediaSizes.phone}px)`);
    const smallPhoneMaxWidth = window.matchMedia(`(min-width: ${theme.mediaSizes.smallPhone}px)`);

    const updatePegWidth = () => {
      if (desktopMaxWidth.matches) {
        this.setState({ pegWidth: theme.pegSizes.desktop });
      } else if (tabletMaxWidth.matches) {
        this.setState({ pegWidth: theme.pegSizes.tablet });
      } else if (phoneMaxWidth.matches) {
        this.setState({ pegWidth: theme.pegSizes.phone });
      } else {
        this.setState({ pegWidth: theme.pegSizes.smallPhone });
      }
    };

    updatePegWidth();

    desktopMaxWidth.addListener(updatePegWidth);
    tabletMaxWidth.addListener(updatePegWidth);
    phoneMaxWidth.addListener(updatePegWidth);

    this.newGame(6);
    setTimeout(() => {
      // this.handleNewGuess(['red', 'orange', 'yellow', 'green', 'blue']);
      this.handleNewGuess(['red', 'orange', 'yellow', 'green', 'blue', 'purple']);
      // this.handleNewGuess(['red', 'red', 'red', 'red']);
      // this.handleNewGuess(['red', 'red', 'yellow', 'yellow']);
      // this.handleNewGuess(['blue', 'blue', 'green', 'green']);
      // this.handleNewGuess(this.state.secretPegs);
    }, 100);
  }


  newGame(numPegs) {
    const maxRounds = Math.floor(numPegs * 2.5);
    this.setState({
      numPegs,
      maxRounds,
      currentRoundId: 1,
      userLost: false,
      userLost: false,
    });
    this.generateRounds(numPegs, maxRounds);
    this.generateSecretCode(numPegs);
  }

  generateRounds(numPegs, maxRounds) {
    const rounds = new Array(maxRounds);

    for (let i = 0; i < maxRounds; i++) {
      rounds[i] = {
        id: i + 1,
        guessPegs: new Array(numPegs).fill(''),
        keyPegs: new Array(numPegs).fill(''),
      };
    }
    this.setState({ rounds });
  }

  generateSecretCode(numPegs) {
    const { colors } = this.state;
    const secretPegs = new Array(numPegs);

    for (let i = 0; i < numPegs; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      secretPegs[i] = colors[randomIndex];
    }
    this.setState({ secretPegs });
  }

  handleNewGuess = (guessPegs) => {
    const { currentRoundId, maxRounds, rounds } = this.state;
    const { isCorrectGuess, keyPegs } = this.generateKeyPegs(guessPegs);

    const roundsCopy = [...rounds];
    const round = roundsCopy[currentRoundId - 1];
    round.guessPegs = guessPegs;
    round.keyPegs = keyPegs;
    this.setState({ rounds: roundsCopy });

    if (isCorrectGuess) {
      console.log('You won!');
      this.setState({ userWon: true });
    } else if (currentRoundId === maxRounds) {
      console.log('You lost');
      this.setState({ userLost: true });
    } else {
      this.setState({ currentRoundId: currentRoundId + 1 });
    }
  }

  generateKeyPegs(guessPegs) {
    const { secretPegs } = this.state;
    const secretPegCounts = {};
    secretPegs.forEach((peg) => {
      const count = secretPegCounts[peg] || 0;
      secretPegCounts[peg] = count + 1;
    });

    // For each guess, generate keyPeg
    const keyPegs = [];
    let countBlack = 0;

    guessPegs.forEach((guessPeg, index) => {
      if (guessPeg === secretPegs[index]) {
        keyPegs[index] = 'black';
        secretPegCounts[guessPeg] -= 1;
        countBlack += 1;
      }
    });

    guessPegs.forEach((guessPeg, index) => {
      if (keyPegs[index]) {
        return;
      }
      if (secretPegCounts[guessPeg]) {
        keyPegs[index] = 'primary';
        secretPegCounts[guessPeg] -= 1;
      } else {
        keyPegs[index] = '';
      }
    });
    console.log('Code:', secretPegs);

    // Shuffle keyPegs
    for (let i = 0; i < keyPegs.length - 2; i++) {
      const randomIndex = Math.floor(Math.random() * (keyPegs.length - i) + i);
      const temp = keyPegs[i];
      keyPegs[i] = keyPegs[randomIndex];
      keyPegs[randomIndex] = temp;
    }

    // Check if guess is correct
    const isCorrectGuess = countBlack === secretPegs.length;

    return {
      isCorrectGuess,
      keyPegs,
    };

  }

  render() {
    const { currentRoundId, rounds, colors, pegWidth, secretPegs, userWon, userLost } = this.state;
    const { handleNewGuess } = this;
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <GlobalStyle />
          <Header>
            <H1>Mastermind</H1>
          </Header>
          <NewGame />
          <Board
            currentRoundId={currentRoundId}
            rounds={rounds}
            colors={colors}
            handleNewGuess={handleNewGuess}
            pegWidth={pegWidth}
            secretPegs={secretPegs}
            userWon={userWon}
            userLost={userLost}
          />
          <Sidebar>
          </Sidebar>
          <Footer />
          <GameResultBanner
            userWon={userWon}
            userLost={userLost}
          />
        </Grid>
      </ThemeProvider>
    );
  }

}

export default App;
