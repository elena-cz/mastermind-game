import styled from 'styled-components/macro';
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

  &:hover, &:focus {
    background-color: ${props => props.isCurrentNumPegs ? props.theme.colors.black : props.theme.colors.lightPrimary};
    color: ${props => props.isCurrentNumPegs ? props.theme.colors.lightPrimary : props.theme.colors.black};
  }
`;

const Description = styled.p`
`;

export { Container, NewGameButton, NumPegButton, Description };
