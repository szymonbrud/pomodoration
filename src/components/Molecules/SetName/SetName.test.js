import React from 'react';
import { storeToTests } from 'Utils';
import { render, fireEvent } from '@testing-library/react';
import pomodoroNames from 'reducers/pomodoroNames';
import { changeCurrentNamePomodoro } from 'actions/pomodoroNames';
import { Provider } from 'react-redux';
import visibleOfComponents from 'reducers/visibleOfComponents';
import SetName from './SetName';

jest.mock('components/Molecules/Timer/Requests');

describe('SetName click option', () => {
  it('check the list of pomodoroNames', () => {
    const store = storeToTests({ pomodoroNames, visibleOfComponents });
    store.dispatch(changeCurrentNamePomodoro('reading', ['coding', 'slepping']));
    const { getAllByTestId } = render(
      <Provider store={store}>
        <SetName />
      </Provider>,
    );

    const allPomdoros = getAllByTestId('pomodoroNamesElement');

    const tabOfPomodoroNames = [];

    allPomdoros.forEach(e => {
      tabOfPomodoroNames.push(e.textContent);
    });

    expect(tabOfPomodoroNames).toEqual(['reading', 'coding', 'slepping']);
  });

  it('check the list of pomodoro when click one of elements', () => {
    const store = storeToTests({ pomodoroNames, visibleOfComponents });
    store.dispatch(changeCurrentNamePomodoro('reading', ['coding', 'slepping']));
    const { getAllByTestId, getByText } = render(
      <Provider store={store}>
        <SetName />
      </Provider>,
    );

    const coding = getByText('coding');
    fireEvent.click(coding);

    const allPomdoros = getAllByTestId('pomodoroNamesElement');
    const tabOfPomodoroNames = [];

    allPomdoros.forEach(e => {
      tabOfPomodoroNames.push(e.textContent);
    });

    expect(tabOfPomodoroNames).toEqual(['coding', 'reading', 'slepping']);
  });
});
