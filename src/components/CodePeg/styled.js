import styled from 'styled-components/macro';
import media from 'sharedStyle/utils/media';


const Container = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
`;

const PegContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.pegWidth}px;
  min-width: ${props => props.pegWidth}px;
  margin: 0 ${props => Math.floor(props.pegWidth / 2)}px;
`;


const Peg = styled.button`
  background-color: ${props => props.theme.colors[props.color || 'mediumGray']};
  min-height: ${props => props.color ? props.pegWidth : Math.floor(props.pegWidth / 2)}px;
  min-width: ${props => props.color ? props.pegWidth : Math.floor(props.pegWidth / 2)}px;
  border-radius: 50%;
  border: none;
  z-index: ${props => props.colorPickerVisible ? 200 : 0};
`;

export { Container, PegContainer, Peg };
