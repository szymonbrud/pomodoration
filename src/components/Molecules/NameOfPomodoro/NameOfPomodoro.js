import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

const StyledH1 = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.blue};
  font-size: 2rem;
  font-weight: 300;
`;

const NameOfPomodoro = ({ name }) => {
  const nameState = useSelector(state => state.pomodoroNames.currentPomodoroName);

  return <StyledH1>{name || nameState}</StyledH1>;
};

NameOfPomodoro.propTypes = {
  name: propTypes.string,
};

NameOfPomodoro.defaultProps = {
  name: '',
};

export default NameOfPomodoro;
