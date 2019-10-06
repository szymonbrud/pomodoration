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
const NameOfPomodoro = ({ name }) => {
  const nameState = useSelector(state => state.pomdoroName);

  return <StyledH1>{name || nameState.name}</StyledH1>;
};

export default NameOfPomodoro;
