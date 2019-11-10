import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LoadingAnimation from 'components/Molecules/LoadingAnimation/LoadingAnimation';
import media from 'assets/styles/media';
import useTimer from './useTimer';

const StyledTimerWarpper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${media.desktop`
    justify-content: center;
    height: 100%;
  `}
`;

const StyledTimer = styled.h1`
  margin-top: 15vh;
  font-size: 3.6rem;
  color: ${({ theme }) => theme.blue};

  ${media.desktop`
    /* transform: translateY(100%); */
    margin: 0;
  `}
`;

const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10vh;
  justify-content: space-around;

  ${media.desktop`
    position: absolute;
    margin: 0;
    bottom: 0;
    transform: translateY(calc(100% + 20px));
  `}
`;

const Timer = ({ ItsTime, status }) => {
  const { minutes, secounds, buttons } = useTimer(ItsTime, status);
  const loading = useSelector(state => state.loadingDataStatusOfTimer);
  return (
    <StyledTimerWarpper>
      {status === undefined || loading ? (
        <LoadingAnimation text="ładowanie" />
      ) : (
        <>
          <StyledTimer>
            {minutes} : {secounds}
          </StyledTimer>
          <WrapperButtons>{buttons}</WrapperButtons>
        </>
      )}
    </StyledTimerWarpper>
  );
};

Timer.propTypes = {
  ItsTime: propTypes.number,
  status: propTypes.string,
};

Timer.defaultProps = {
  ItsTime: undefined,
  status: undefined,
};

export default Timer;

// TODO: pozmieniać strukure plików tego bo to masakra
