import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  width: 45%;
  height: 57px;
  background: ${({ theme }) => theme.red};
  border-radius: 10px;
  position: absolute;
  top: -11px;
  left: 12%;
`;

const PomodoroSesions = () => (
  <>
    <StyledMainWrapper />
  </>
);

export default PomodoroSesions;
