import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Peg } from './styled';

class CodePeg extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { color, onClick, disabled } = this.props;
    return (
      <Container>
        <Peg 
          color={color}
          onClick={onClick}
          disabled={disabled}
        />
      </Container>
    );
  }

}

CodePeg.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CodePeg;
