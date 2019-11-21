import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeNameOfPomdoroListOpen } from 'actions/visibleOfComponents';

const StyledMainWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const HideTheSetNamePomodoro = () => {
  const dispatch = useDispatch();
  const isSetNamePomodoroVisible = useSelector(
    state => state.visibleOfComponents.isNameOfPomodoroListOpen,
  );

  return (
    <StyledMainWrapper
      isVisible={isSetNamePomodoroVisible}
      onClick={() => dispatch(changeNameOfPomdoroListOpen(false))}
    />
  );
};

export default HideTheSetNamePomodoro;
