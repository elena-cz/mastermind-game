import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from 'sharedStyle/theme';
import GlobalStyle from 'sharedStyle/globalStyle';
import { H1 } from 'sharedStyle/typography';

import { Grid, Header, NewGame, Board, Sidebar, Footer } from './styled';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <GlobalStyle />
          <Header>
            <H1>Mastermind</H1>
          </Header>
          <NewGame />
          <Board />
          <Sidebar />
          <Footer />
        </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
