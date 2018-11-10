import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { Container, RoundNum, GuessPegs, KeyPegs } from 'components/Round/styled';
import { PegContainer, Peg } from 'components/CodePeg/styled';


const SecretContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.colors.white};
`;
// box-shadow: 1px 2px 4px #bdbdbd;

const SecretPegs = styled(GuessPegs)``;

const SecretPegContainer = styled(PegContainer)``;

const SecretPeg = styled(Peg)``;

const LeftSpace = styled(RoundNum)``;

const RightSpace = styled(KeyPegs)``;


export { SecretContainer, SecretPegs, SecretPegContainer, SecretPeg, LeftSpace, RightSpace };
