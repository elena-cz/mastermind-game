import React, { Component } from 'react';
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
  Blue,
  Green,
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

            <P><Semibold>You have 15 rounds to guess the secret code</Semibold></P>

            <H3>1. Guess</H3>

            <P>Choose a color for each peg in the current round</P>

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
              // <Li>&#9679; for 1st blue in the correct position</Li>
              // <Li>&#9675; for green, the correct color, but the wrong position.</Li>
              // <Li>&#9675; for one of the other blues in the wrong position.</Li>

export default RulesInfo;
