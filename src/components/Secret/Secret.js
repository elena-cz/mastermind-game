import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SecretContainer,
  Cover,
  CoverText,
  RevealContainer,
  RevealIconButton,
  RevealTooltip,
  SecretPegs,
  SecretPegContainer,
  SecretPeg,
  LeftSpace,
  RightSpace,
} from './styled';


class Secret extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { secretPegs, userWon, userLost, pegWidth } = this.props;
    return (
      <SecretContainer>

        <Cover
          userWon={userWon}
          userLost={userLost}
        >

          <RevealContainer>
            <RevealTooltip>
              Reveal Code
            </RevealTooltip>
            <RevealIconButton />
          </RevealContainer>

        </Cover>

        <LeftSpace />

        <SecretPegs>

          <CoverText
            userWon={userWon}
            userLost={userLost}
          >
            Secret Code
          </CoverText>

          {secretPegs.map(color => (
            <SecretPegContainer
              pegWidth={pegWidth}
            >
              <SecretPeg
                key={color}
                color={!userWon && !userLost ? 'mediumGray' : color}
                pegWidth={pegWidth}
              />
            </SecretPegContainer>
          ))}
 
        </SecretPegs>

        <RightSpace pegWidth={pegWidth} />

      </SecretContainer>
    );
  }

}

Secret.propTypes = {
  secretPegs: PropTypes.arrayOf(PropTypes.string).isRequired,
  userWon: PropTypes.bool.isRequired,
  userLost: PropTypes.bool.isRequired,
  pegWidth: PropTypes.number.isRequired,
};

export default Secret;
