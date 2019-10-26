import React from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';
import NameOfPomodoro from 'components/Molecules/NameOfPomodoro/NameOfPomodoro';
import SetName from 'components/Molecules/SetName/SetName';
import propTypes from 'prop-types';

const InterfaceSwitchButtonsRender = ({ runApp, pauseApp, resetApp, currentAction, name }) => {
  switch (currentAction) {
    case 'run':
      return (
        <>
          <TimerButton blue onClick={() => pauseApp()} data-test="runTimerButton">
            pause
          </TimerButton>
          <NameOfPomodoro name={name} />
        </>
      );
    case 'pause':
      return (
        <>
          <TimerButton red onClick={() => resetApp('reset')} data-test="pauseTimerButton">
            reset
          </TimerButton>
          <TimerButton blue onClick={() => runApp()}>
            wznow
          </TimerButton>
          <NameOfPomodoro name={name} />
        </>
      );
    default:
      return (
        <>
          <SetName />
          <TimerButton onClick={() => runApp()} data-test="resetOrNothingTimerButton">
            start
          </TimerButton>
          <NameOfPomodoro name={name} />
        </>
      );
  }
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
