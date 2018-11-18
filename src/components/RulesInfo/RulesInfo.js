import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H2, H3, H4, P, Small, Semibold, A, Ul, Li } from 'sharedStyle/typography';
import {
  Zippy,
  ZippyButtonContainer,
  ZippyHeading,
  ExpandIcon,
  ZippyTextContainer,
  Table,
  Th,
  Td,
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Purple,
} from './styled';


class RulesInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRulesExpanded: true,
      isAboutExpanded: true,
    };
  }

  toggleRulesDisplay = () => {
    const { isRulesExpanded } = this.state;
    this.setState({ isRulesExpanded: !isRulesExpanded });
  }

  toggleAboutDisplay = () => {
    const { isAboutExpanded } = this.state;
    this.setState({ isAboutExpanded: !isAboutExpanded });
  }

  render() {
    const { maxRounds } = this.props;
    const { isRulesExpanded, isAboutExpanded } = this.state;

    return (
      <div>

        <Zippy>

          <H2>
            <ZippyButtonContainer
              isExpanded={isRulesExpanded}
              onClick={() => this.toggleRulesDisplay()}
            >

              <ExpandIcon isExpanded={isRulesExpanded} />

              <ZippyHeading>
                Rules
              </ZippyHeading>

            </ZippyButtonContainer>
          </H2>

          <ZippyTextContainer
            hidden={!isRulesExpanded}
            isExpanded={isRulesExpanded}
          >

            <P><Semibold>You have {maxRounds} rounds to guess the secret code</Semibold></P>

            <H3>1. Guess</H3>

            <P>
              Choose a color for each large peg in the current round &nbsp;
              <Red>&#11044;</Red>
              <Orange>&#11044;</Orange>
              <Yellow>&#11044;</Yellow>
              <Green>&#11044;</Green>
              <Blue>&#11044;</Blue>
              <Purple>&#11044;</Purple>
            </P>

            <H3>2. Decipher clues</H3>

            <P>After you submit your guess, you’ll see key pegs on the right:</P>

            <Ul>
              <Li>&#9679; = correct color & correct position</Li>
              <Li>&#9675; = correct color, but wrong position</Li>
            </Ul>

            <P><Semibold>The order of the key pegs is random</Semibold></P>

            <H4>Example</H4>

            <Ul>
              <Li>
                <Table>
                  <tr>
                    <Td />
                    <Td><Small>1</Small></Td>
                    <Td><Small>2</Small></Td>
                    <Td><Small>3</Small></Td>
                    <Td><Small>4</Small></Td>
                  </tr>
                  <tr>
                    <Th>Secret Code</Th>
                    <Td><Blue>&#11044;</Blue></Td>
                    <Td><Blue>&#11044;</Blue></Td>
                    <Td><Green>&#11044;</Green></Td>
                    <Td><Green>&#11044;</Green></Td>
                  </tr>
                  <tr>
                    <Th>Guess Pegs</Th>
                    <Td><Blue>&#11044;</Blue></Td>
                    <Td><Green>&#11044;</Green></Td>
                    <Td><Blue>&#11044;</Blue></Td>
                    <Td><Blue>&#11044;</Blue></Td>
                  </tr>
                  <tr>
                    <Th>Key Pegs*</Th>
                    <Td>&#9679;</Td>
                    <Td>&#9675;</Td>
                    <Td>&#9675;</Td>
                    <Td />
                  </tr>

                </Table>

                <Small>* Will be in random order</Small>
              </Li>

              <Li>No peg for the last blue guess, only 2 blue pegs in the secret code</Li>
              <Li>No indication that there's another green in the secret code</Li>
            </Ul>

            <H3>3. Guess again</H3>
            <P>Keep guessing until you get the right code, or run out of rounds</P>

          </ZippyTextContainer>
        </Zippy>

        <Zippy>

          <H2>
            <ZippyButtonContainer
              isExpanded={isAboutExpanded}
              onClick={() => this.toggleAboutDisplay()}
            >

              <ExpandIcon isExpanded={isAboutExpanded} />

              <ZippyHeading>
                About
              </ZippyHeading>

            </ZippyButtonContainer>
          </H2>

          <ZippyTextContainer
            hidden={!isAboutExpanded}
            isExpanded={isAboutExpanded}
          >

            <P>Project by Elena Czubiak</P>
            <P>
              <A href="https://github.com/elena-cz/mastermind-game" target="_blank" rel="noopener noreferrer">
                View code on Github
              </A>
            </P>

          </ZippyTextContainer>

        </Zippy>

      </div>
    );
  }

}

RulesInfo.propTypes = {
  maxRounds: PropTypes.number.isRequired,
};

export default RulesInfo;
