import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledH1 = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// TODO: propTYpes
// TODO: zmineić style, oraz może położenie tego chodzi mi o plik do którego to impotujemy
const NameOfPomodoro = ({ name }) => {
  const nameState = useSelector(state => state.pomodoroNames.currentPomodoroName);

  return <StyledH1>{name || nameState}</StyledH1>;
};

export default NameOfPomodoro;
