import React from 'react';
import styled from 'styled-components';
import NewInput from 'components/Molecules/Input/Input';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCurrentNamePomodoro } from 'actions/pomodoroNames';
import { saveMyPomodorosNamesToDatabase } from 'components/Molecules/Timer/Requests';

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
`;

const StyledClickPaddingForBeam = styled.button`
  padding: 10px;
  position: absolute;
  top: 6px;
  background: none;
  border: none;
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

// TODO: tests
const SetNewNameBottomPanel = ({ action, open }) => {
  const dispatch = useDispatch();
  const nameOfLastPomodoros = useSelector(state => state.pomodoroNames.nameOfLastPomodoros);

  const sedToRedux = name => {
    dispatch(changeCurrentNamePomodoro(name, nameOfLastPomodoros));
  };

  return (
    <>
      <StyledMainWrapper open={open} data-testid="bottomBarMainWrapper">
        <StyledClickPaddingForBeam onClick={action}>
          <StyledCloseBeam />
        </StyledClickPaddingForBeam>
        <StyledNameWindow>dodaj nazwę</StyledNameWindow>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values, { setSubmitting }) => {
            sedToRedux(values.name);
            action();
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
              />
              <StyledPostionWrapper>
                <StyledButton type="button" onClick={action}>
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
    </>
  );
};

SetNewNameBottomPanel.propTypes = {
  action: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

SetNewNameBottomPanel.defaultProps = {
  open: false,
};

export default SetNewNameBottomPanel;
