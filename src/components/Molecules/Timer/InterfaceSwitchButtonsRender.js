import React from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';
import NameOfPomodoro from 'components/Molecules/NameOfPomodoro/NameOfPomodoro';
import SetName from 'components/Molecules/SetName/SetName';
import propTypes from 'prop-types';

const InterfaceSwitchButtonsRender = ({ runApp, pauseApp, resetApp, currentAction, name }) => {
  if (currentAction === 'run') {
    return (
      <>
        <TimerButton blue onClick={() => pauseApp()} data-test="pauseButton">
          pause
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    );
  }
  if (currentAction === 'pause') {
    return (
      <>
        <TimerButton red onClick={() => resetApp('reset')} data-test="pauseButton">
          reset
        </TimerButton>
        <TimerButton blue onClick={() => runApp()} data-test="pauseButton">
          wznow
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    );
  }
  return (
    <>
      <SetName />
      <TimerButton onClick={() => runApp()}>start</TimerButton>
      <NameOfPomodoro name={name} />
    </>
  );
};

InterfaceSwitchButtonsRender.propTypes = {
  runApp: propTypes.func.isRequired,
  pauseApp: propTypes.func.isRequired,
  resetApp: propTypes.func.isRequired,
  currentAction: propTypes.string.isRequired,
  name: propTypes.string,
};

InterfaceSwitchButtonsRender.defaultProps = {
  name: '',
};

export default InterfaceSwitchButtonsRender;
