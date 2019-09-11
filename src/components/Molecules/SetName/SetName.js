import React, { useState } from 'react';
import styled from 'styled-components';
import SetNewNameBottomPanel from 'components/Molecules/SetNewNameBottomPanel/SetNewNameBottomPanel';

const StyledMainWrapper = styled.div`
  width: 50%;
  border: 1px solid ${({ theme }) => theme.perpule};
  border-radius: 10px;
  background: white;
  position: relative;
  height: auto;
`;

const StyledMainRoller = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.perpule};
  font-size: 1.8rem;
  font-weight: 400;
`;

const StyledMainSelecter = styled.div`
  width: 100%;
  padding: 0 0 15px 0;
  display: ${({ open }) => !open && 'none'};
`;

const StyledOneOption = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
`;

const SetName = () => {
  // TODO: review, tests

  const [open, setOpen] = useState(false);
  const [openDownBar, setOpenDownBar] = useState(false);

  const chengeOpen = () => {
    setOpen(!open);
  };

  const chengeOpenDownBar = () => {
    setOpenDownBar(false);
  };

  const OpenBarAndCloseList = () => {
    setOpen(!open);
    setOpenDownBar(true);
  };

  return (
    <>
      <StyledMainWrapper>
        <StyledMainRoller onClick={() => chengeOpen()}>co dziś robimy?</StyledMainRoller>
        <StyledMainSelecter open={open} data-testid="wrapperCelecter">
          <StyledOneOption onClick={() => OpenBarAndCloseList()}>+dodaj nazwę</StyledOneOption>
        </StyledMainSelecter>
      </StyledMainWrapper>
      <SetNewNameBottomPanel open={openDownBar} action={chengeOpenDownBar} />
    </>
  );
};

export default SetName;
