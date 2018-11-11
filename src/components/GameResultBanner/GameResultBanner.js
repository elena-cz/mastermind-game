import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  UserWonBanner,
} from './styled';


class GameResultBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showBanner: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userWon) {
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
    const { showBanner } = this.state;
    return (
      <UserWonBanner
        showBanner={showBanner}
      >
        You Won!!
      </UserWonBanner>
    );
  }

}

GameResultBanner.propTypes = {
  userWon: PropTypes.bool.isRequired,
  userLost: PropTypes.bool.isRequired,
};

export default GameResultBanner;
