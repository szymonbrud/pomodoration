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

  // TODO: repair this test
  // it('add new pomodoroName by SetNewNameBottomPanel component', async () => {
  //   const store = storeToTests({ pomodoroNames });
  //   store.dispatch(changeCurrentNamePomodoro('reading', ['coding', 'slepping']));
  //   const { getByTestId, getByText, findByTestId, getAllByTestId } = render(
  //     <Provider store={store}>
  //       <SetName />
  //     </Provider>,
  //   );

  //   const input = getByTestId('input');
  //   fireEvent.change(input, { target: { value: 'programming' } });

  //   const doneButton = getByText('done');
  //   fireEvent.click(doneButton);

  //   const wrrper = getByText('co dziś robimy?');
  //   fireEvent.click(wrrper);

  //   const tabOfPOmodorNames = [];

  //   const allPomoros = getAllByTestId('pomodoroNamesElement');
  //   allPomoros.forEach(e => {
  //     tabOfPOmodorNames.push(e.textContent);
  //   });

  //   let storeSome;

  //   setTimeout(() => {
  //     storeSome = store.getState().pomodoroNames.nameOfLastPomodoros;
  //   });

  //   // const SetNewNameBottomPanel = await waitForElement(() => findByTestId('input'));
  //   // console.log(input);

  //   expect(storeSome).toBe(['reading', 'coding', 'slepping']);
  // });
});
