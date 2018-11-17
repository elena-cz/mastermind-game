import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H2, H3, H4, P, Small, Semibold, Ul, Li } from 'sharedStyle/typography';
import {
  Container,
  RulesButtonContainer,
  RulesHeading,
  ExpandIcon,
  RulesTextContainer,
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
    };
  }

  toggleRulesDisplay = () => {
    const { isRulesExpanded } = this.state;
    this.setState({ isRulesExpanded: !isRulesExpanded });
  }

  render() {
    const { maxRounds } = this.props;
    const { isRulesExpanded } = this.state;

    return (
      <Container>

        <div>

          <H2>
            <RulesButtonContainer
              isRulesExpanded={isRulesExpanded}
              onClick={() => this.toggleRulesDisplay()}
            >

              <ExpandIcon isRulesExpanded={isRulesExpanded} />

              <RulesHeading>
                Rules
              </RulesHeading>

            </RulesButtonContainer>
          </H2>

          <RulesTextContainer
            hidden={!isRulesExpanded}
            isRulesExpanded={isRulesExpanded}
          >

            <P><Semibold>You have {maxRounds} rounds to guess the secret code</Semibold></P>

            <H3>1. Guess</H3>

            <P>
              Choose a color for each peg in the current round &nbsp;
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
              <Li>&#9675; = correct color, but not the correct position</Li>
              <Li><Semibold>The order of the key pegs is random</Semibold></Li>
            </Ul>

            <H4>Example</H4>

            <Ul>
              <Li>
                <Table>
                  <tr>
                    <Td></Td>
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
                    <Td></Td>
                  </tr>

                </Table>

                <Small>* Will be in random order</Small>
              </Li>

              <Li>No peg for last blue guess, only 2 blue pegs in the secret code</Li>
              <Li>No indication that there's another green in the secret code</Li>
            </Ul>

            <H3>3. Guess again</H3>
              <P>Keep guessing until you get the right code, or run out of rounds.</P>

          </RulesTextContainer>
         </div>

      </Container>
    );
  }

}

RulesInfo.propTypes = {
  maxRounds: PropTypes.number.isRequired,
};

export default RulesInfo;
