import React from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';
import NameOfPomodoro from 'components/Molecules/NameOfPomodoro/NameOfPomodoro';
import SetName from 'components/Molecules/SetName/SetName';
import propTypes from 'prop-types';

const InterfaceSwitchButtonsRender = ({ runApp, pauseApp, resetApp, currentAction, name }) => {
  const InterfaceViews = {
    runView: (
      <>
        <TimerButton blue onClick={() => pauseApp()} data-test="runTimerButton">
          zatrzymaj
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    ),

    pauseView: (
      <>
        <TimerButton red big onClick={() => resetApp('reset')} data-test="pauseTimerButton">
          zakończ i zapisz
        </TimerButton>
        <TimerButton blue onClick={() => runApp()}>
          wznów
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    ),

    resetView: (
      <>
        <SetName />
        <TimerButton onClick={() => runApp()} data-test="resetOrNothingTimerButton">
          start
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    ),
  };

  switch (currentAction) {
    case 'run':
      return InterfaceViews.runView;
    case 'pause':
      return InterfaceViews.pauseView;
    default:
      return InterfaceViews.resetView;
  }
};

InterfaceSwitchButtonsRender.propTypes = {
  runApp: propTypes.func.isRequired,
  pauseApp: propTypes.func.isRequired,
  resetApp: propTypes.func.isRequired,
  currentAction: propTypes.string,
  name: propTypes.string,
};

InterfaceSwitchButtonsRender.defaultProps = {
  name: '',
  currentAction: 'reset',
};

export default InterfaceSwitchButtonsRender;
