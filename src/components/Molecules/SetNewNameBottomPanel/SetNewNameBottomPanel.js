import React from 'react';
import styled from 'styled-components';
import NewInput from 'components/Molecules/Input/Input';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentNamePomodoro } from 'actions/pomodoroNames';
import media from 'assets/styles/media';
import { changeSetNameBottomPanel } from 'actions/visibleOfComponents';

const StyledMainPossitionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5000;

  ${media.desktop`
    bottom: unset;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    display: ${({ open }) => (open ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
  `}
`;

const StyledMainWrapper = styled.div`
  height: 35vh;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.BGblue};
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(100%)')};
  transition: transform 0.2s;
  z-index: 5000;

  ${media.desktop`
    max-width: 500px;
    width: 30%;
    max-height: 280px;
    height: 32vh;
    transform: unset;
    position: static;
    border-radius: 20px;
  `}
`;

const StyledClickPaddingForBeam = styled.button`
  padding: 10px;
  position: absolute;
  top: 6px;
  background: none;
  border: none;

  ${media.desktop`
    display: none;
  `}
`;

const StyledCloseBeam = styled.div`
  border-radius: 100px;
  width: 46px;
  height: 4px;
  background: white;
`;

const StyledNameWindow = styled.p`
  font-size: 2rem;
  color: white;

  ${media.desktop`
    margin-bottom: auto;    
  `}
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledPostionWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin-top: 40px;

  ${media.desktop`
    margin-bottom: 25px;
    width: 85%;
  `}
`;

const StyledButton = styled.button`
  background: white;
  border: none;
  color: ${({ theme }) => theme.BGblue};
  border-radius: 10px;
  height: 48px;
  width: 129px;
  font-size: 2rem;
`;

// TODO: #TEST ten plik będzie testowany integracyjne razem z drguim

const SetNewNameBottomPanel = () => {
  const dispatch = useDispatch();
  const nameOfLastPomodoros = useSelector(state => state.pomodoroNames.nameOfLastPomodoros);
  const open = useSelector(state => state.visibleOfComponents.isSetNameBottomPanelVisible);

  const sedToRedux = name => {
    dispatch(changeCurrentNamePomodoro(name, nameOfLastPomodoros));
  };

  const offPanel = () => {
    dispatch(changeSetNameBottomPanel(false));
  };

  return (
    <>
      <StyledMainPossitionWrapper open={open}>
        <StyledMainWrapper open={open} data-testid="bottomBarMainWrapper">
          <StyledClickPaddingForBeam onClick={offPanel}>
            <StyledCloseBeam />
          </StyledClickPaddingForBeam>
          <StyledNameWindow>dodaj nazwę</StyledNameWindow>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, { setSubmitting }) => {
              sedToRedux(values.name);
              offPanel();
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, handleSubmit }) => (
              <StyledForm onSubmit={handleSubmit}>
                <NewInput
                  active
                  name="name"
                  placeholder="nazwa"
                  color="white"
                  width="80%"
                  height="47px"
                  data-testid="input"
                />
                <StyledPostionWrapper>
                  <StyledButton type="button" onClick={offPanel}>
                    back
                  </StyledButton>
                  <StyledButton type="submit" disabled={isSubmitting}>
                    done
                  </StyledButton>
                </StyledPostionWrapper>
              </StyledForm>
            )}
          </Formik>
        </StyledMainWrapper>
      </StyledMainPossitionWrapper>
    </>
  );
};

export default SetNewNameBottomPanel;
