import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  width: 57px;
  height: 57px;
  background: ${({ theme }) => theme.blue};
  position: absolute;
  right: 12%;
  top: -11px;
  border-radius: 10px;
`;

const PomodoroSettings = () => (
  <>
    <StyledMainWrapper />
  </>
);

export default PomodoroSettings;
