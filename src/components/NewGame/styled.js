import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';
import { PrimaryButton, RoundButton } from 'sharedStyle/buttons';


const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NewGameButton = styled(PrimaryButton)`
  margin-right: ${props => props.theme.spacers.md};
`;

const NumPegButton = styled(RoundButton)`
  margin-right: ${props => props.theme.spacers.sm};
  background-color: ${props => props.isCurrentNumPegs ? props.theme.colors.black : props.theme.colors.white};
  color: ${props => props.isCurrentNumPegs ? props.theme.colors.white : props.theme.colors.black};
`;

const Description = styled.p`
`;

export { Container, NewGameButton, NumPegButton, Description };
