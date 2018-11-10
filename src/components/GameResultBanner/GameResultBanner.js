import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  UserWonBanner,
} from './styled';


class GameResultBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { userWon, userLost } = this.props;
    return (
      <UserWonBanner
        userWon={userWon}
        userLost={userLost}
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
