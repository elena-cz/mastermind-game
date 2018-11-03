import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import theme from 'style/theme';
import GlobalStyle from 'style/globalStyle';
import { Grid, Header, Board, Sidebar, Footer } from './styled';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <GlobalStyle />
          <Header />
          <Board />
          <Sidebar />
          <Footer />
        </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
