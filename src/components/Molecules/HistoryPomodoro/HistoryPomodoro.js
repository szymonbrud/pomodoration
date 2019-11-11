import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import PomdoroHistoryContent from 'components/Molecules/PomdoroHistoryContent/PomdoroHistoryContent';
import media from 'assets/styles/media';

const StyledMainWrapper = styled.div`
  border-radius: 15px 15px 0 0;
  position: fixed;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.BGblue};
  transform: translateY(100%);
  transition: ${({ animateSliding }) => animateSliding && 'transform .3s'};
  transition: ${({ animateActivite }) => animateActivite && 'transform .2s'};
  overflow: auto;
  ${props =>
    props.active &&
    css`
      transform: translateY(calc(${props.currentPosition}px - 25vh));
    `};

  ${media.desktop`
    transform: unset;
    width: 35vw;
    top: 5vh;
    left: unset;
    right: 4vw;
    height: 90vh;
    border-radius: 15px;
  `}
`;

const HistoryPomodoro = ({ active, currentPositionOfSlide, animateSliding, animateActivite }) => {
  return (
    <StyledMainWrapper
      active={active}
      currentPosition={currentPositionOfSlide}
      animateSliding={animateSliding}
      animateActivite={animateActivite}
      data-testid="content"
    >
      <PomdoroHistoryContent />
    </StyledMainWrapper>
  );
};

HistoryPomodoro.propTypes = {
  active: propTypes.bool,
  currentPositionOfSlide: propTypes.number.isRequired,
  animateSliding: propTypes.bool,
  animateActivite: propTypes.bool,
};

HistoryPomodoro.defaultProps = {
  active: false,
  animateSliding: false,
  animateActivite: false,
};

export default HistoryPomodoro;
