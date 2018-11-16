import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Banner,
} from './styled';


class GameResultBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showBanner: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { userWon, userLost } = this.props;
    if ((userWon && userLost !== prevProps.userWon) ||
      (userLost && userLost !== prevProps.userLost)) {
      this.showBanner();
    }
  }

  showBanner = () => {
    setTimeout(() => {
      this.setState({ showBanner: true });
      this.hideBanner();
    },
    2300);
  }

  hideBanner = () => {
    setTimeout(() => { this.setState({ showBanner: false }); }, 4500);
  }


  render() {
    const { userWon } = this.props;
    const { showBanner } = this.state;
    return (
      <Banner
        showBanner={showBanner}
        userWon={userWon}
      >
        { userWon ? 'You Won!!' : 'Game over'}
      </Banner>
    );
  }

}

GameResultBanner.propTypes = {
  userWon: PropTypes.bool.isRequired,
  userLost: PropTypes.bool.isRequired,
};

export default GameResultBanner;
