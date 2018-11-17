import React, { Component } from 'react';
import { H2, H3 } from 'sharedStyle/typography';
import {
  Container,
  RulesButtonContainer,
  RulesHeading,
  ExpandIcon,
  RulesTextContainer,
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo purus quis mi cursus hendrerit eu eu metus. Aliquam aliquam arcu eget aliquet scelerisque. Pellentesque sodales turpis vitae venenatis vehicula. Ut id porta velit. Ut eu dignissim dui, quis gravida est. Cras quis venenatis mauris, a bibendum enim. Sed at augue libero. Nullam tortor metus, tincidunt ut urna id, posuere placerat orci. Ut quis risus dictum risus facilisis imperdiet quis sed eros.</p>
          </RulesTextContainer>
         </div>

      </Container>
    );
  }

}

export default RulesInfo;
