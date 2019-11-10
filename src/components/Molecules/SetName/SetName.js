import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentNamePomodoro } from 'actions/pomodoroNames';
import media from 'assets/styles/media';
import { changeSetNameBottomPanel } from 'actions/visibleOfComponents';

const StyledMainWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.desktop`
    width: 36%;
  `}
`;

const StyledMainRoller = styled.p`
  user-select: none;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.perpule};
  font-size: 2.1rem;
  text-align: center;
  font-weight: 400;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.blue};
  }
`;

const animationCome = keyframes`
  0%{
    display: none;
    transform: scale(.9) translateY(calc(50% - 30px));
    opacity: 0;
  }
  1%{
    display: block;
  }

  80%{
    transform: scale(1.1) translateY(calc(50% - 30px));
    opacity: 1;
  }

  100%{
    transform: scale(1) translateY(calc(50% - 30px));
  }
`;

const StyledMainSelecter = styled.div`
  z-index: 5500;
  position: absolute;
  width: 100%;
  transform: translateY(calc(50% - 30px));
  padding: 8px 0 0;
  background: #faf8fc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: none;

  ${({ open }) =>
    open &&
    css`
      display: block;
      animation: ${animationCome} 0.3s ease-in-out;
    `}
`;

const StyledCloseWrapper = styled.div`
  display: ${({ open }) => !open && 'none'};
  z-index: 5000;
  width: 100%;
  height: 100vh;
  background: none;
  position: fixed;

  ${media.desktop`
    height: 70vh;
  `}
`;

const StyledSmallInformation = styled.p`
  margin: 10px 16px 0;
  font-size: 17px;
  color: rgba(116, 104, 248, 0.7);
  user-select: none;
`;

const OneElementOfList = styled.p`
  font-size: 1.8rem;
  margin: 10px 16px 0;
  user-select: none;
`;

const StyledOneOption = styled.div`
  font-size: 2.4rem;
  margin: 12px 0 2px;
  border-top: solid 1px rgba(0, 0, 0, 0.45);
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledAddNewNameP = styled.p`
  font-size: 1.8rem;
  color: rgba(116, 104, 248, 0.7);
  margin: 0 13px;
  padding: 13px 3px;
  user-select: none;
`;

const SetName = () => {
  const dispatch = useDispatch();
  const pomodoroNames = useSelector(state => state.pomodoroNames.nameOfLastPomodoros);
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  const OpenBarAndCloseList = () => {
    dispatch(changeSetNameBottomPanel(true));

    setOpen(!open);
    // setOpenDownBar(true);
  };

  const setOptionFromList = name => {
    dispatch(changeCurrentNamePomodoro(name, pomodoroNames));
    changeSetNameBottomPanel();
  };

  // TODO: wywalić testy tego pliku i dodać je jako integracyjne

  return (
    <>
      <StyledMainWrapper>
        <StyledMainRoller onClick={() => changeOpen()}>co dziś robimy?</StyledMainRoller>
        <StyledMainSelecter open={open} data-testid="listOfPomodoros">
          <StyledSmallInformation>ostatnie:</StyledSmallInformation>
          {pomodoroNames.map(e => (
            <OneElementOfList
              onClick={() => setOptionFromList(e)}
              key={`id_${e}`}
              data-testid="pomodoroNamesElement"
            >
              {e}
            </OneElementOfList>
          ))}
          <StyledOneOption onClick={() => OpenBarAndCloseList()}>
            <StyledAddNewNameP>+dodaj nazwę</StyledAddNewNameP>
          </StyledOneOption>
        </StyledMainSelecter>
        <StyledCloseWrapper open={open} onClick={() => changeOpen()} />
      </StyledMainWrapper>
    </>
  );
};

export default SetName;
