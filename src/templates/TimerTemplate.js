import React from 'react';
import TopBar from 'components/Organisms/TopBar/TopBar';
import MainContent from 'components/Organisms/MainContent/MainContent';
import styled from 'styled-components';
import SetNewNameBottomPanel from 'components/Molecules/SetNewNameBottomPanel/SetNewNameBottomPanel';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TimerTemplate = () => (
  <StyledMainWrapper>
    <TopBar />
    <MainContent />
    <SetNewNameBottomPanel />
  </StyledMainWrapper>
);

export default TimerTemplate;
