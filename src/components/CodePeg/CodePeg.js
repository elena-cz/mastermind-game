import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from 'sharedStyle/theme';
import { Peg } from './styled';

class CodePeg extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { color } = this.props;
    return (
      <Peg color={color} />
    );
  }
}

CodePeg.propTypes = {
  color: PropTypes.string,
};

CodePeg.defaultProps = {
  color: theme.mediumGray,
};

export default CodePeg;
