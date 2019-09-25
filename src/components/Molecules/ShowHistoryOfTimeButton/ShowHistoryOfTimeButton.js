import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import HistoryPomodoro from 'components/Molecules/HistoryPomodoro/HistoryPomodoro';
import debounce from 'lodash.debounce';

const StyledWrapperLine = styled.div`
  position: fixed;
  top: 0;
  height: 7vh;
  left: 50%;
  transform: ${({ currentPostion }) => `translate(-50%, calc(${currentPostion}px - 3.5vh))`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  transition: ${({ animateSliding }) => animateSliding && 'transform .3s'};
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.BGblue};
  font-size: 1.6rem;
  margin: 5px 0 0 0;

  ${({ active }) =>
    active &&
    css`
      color: white;
    `}
  transition: color .4s;
`;

const StyledLine = styled.div`
  width: 40px;
  height: 4px;
  background: ${({ theme }) => theme.blue};
  transition: background 0.4s;
  border-radius: 100px;

  ${({ active }) =>
    active &&
    css`
      background: white;
    `}
`;

const ShowHistoryOfTimeButton = () => {
  const minHeightSliding = (window.innerHeight / 20) * 19.3;
  const maxHeightSliding = (window.innerHeight / 20) * 1;
  const [currentPositionOfSlide, setCurrentPositionOfSlide] = useState(minHeightSliding);
  const [active, setActive] = useState(false);
  const [animateSliding, setAnimateSliding] = useState(false);
  const [animateActivite, setAnimateActivite] = useState(false);

  useEffect(() => {
    if (currentPositionOfSlide < (window.innerHeight / 20) * 19.2) {
      if (!active) {
        setAnimateActivite(true);
        setActive(true);
        setTimeout(() => {
          setAnimateActivite(false);
        }, 250);
      }
    } else if (active) {
      setAnimateActivite(true);
      setActive(false);
      setTimeout(() => {
        setAnimateActivite(false);
      }, 250);
    }
  }, [currentPositionOfSlide]);

  const move = debounce(e => {
    if (!(e > minHeightSliding) && !(e < maxHeightSliding)) {
      setCurrentPositionOfSlide(e);
    }
  }, 1);

  const whenIsMoving = e => {
    setAnimateSliding(true);
    if (e.pageY < minHeightSliding / 2) {
      setCurrentPositionOfSlide(minHeightSliding);
    } else {
      setCurrentPositionOfSlide(maxHeightSliding);
    }
    setTimeout(() => {
      setAnimateSliding(false);
    }, 300);
  };

  const startedMove = e => {
    // I have started
  };

  const stopedMove = e => {
    // I have stoped
  };

  return (
    <>
      <StyledWrapperLine
        currentPostion={currentPositionOfSlide}
        onTouchMove={e => move(e.touches[0].clientY)}
        onTouchStart={e => startedMove(e)}
        onTouchEnd={e => stopedMove(e)}
        onClick={e => whenIsMoving(e)}
        animateSliding={animateSliding}
        data-testid="openButton"
      >
        <StyledLine active={active} />
        <StyledText active={active}>ostatnie sesje</StyledText>
      </StyledWrapperLine>
      <HistoryPomodoro
        active={active}
        currentPositionOfSlide={currentPositionOfSlide}
        animateSliding={animateSliding}
        animateActivite={animateActivite}
      />
    </>
  );
};

export default ShowHistoryOfTimeButton;
