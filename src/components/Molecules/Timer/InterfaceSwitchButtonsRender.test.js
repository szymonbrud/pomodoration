import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from 'Utils';
import InterfaceSwitchButtonsRender from './InterfaceSwitchButtonsRender';

describe('InterfaceSwitchButtonsRender', () => {
  it('Should to render when run', () => {
    const runPropsTypes = {
      runApp: () => {},
      pauseApp: () => {},
      resetApp: () => {},
      currentAction: 'run',
      name: '',
    };

    const wrapper = shallow(<InterfaceSwitchButtonsRender {...runPropsTypes} />);
    const runTimerButton = findByTestAtrr(wrapper, 'runTimerButton');
    expect(runTimerButton.length).toBe(1);
  });

  it('Should to render when pause', () => {
    const pausePropsTypes = {
      runApp: () => {},
      pauseApp: () => {},
      resetApp: () => {},
      currentAction: 'pause',
      name: '',
    };

    const wrapper = shallow(<InterfaceSwitchButtonsRender {...pausePropsTypes} />);
    const pauseTimerButton = findByTestAtrr(wrapper, 'pauseTimerButton');
    expect(pauseTimerButton.length).toBe(1);
  });

  it('Should NOT to render a run component, Should to render a resetbutton', () => {
    const runPropsTypes = {
      runApp: () => {},
      pauseApp: () => {},
      resetApp: () => {},
      currentAction: 'badName',
      name: '',
    };

    const wrapper = shallow(<InterfaceSwitchButtonsRender {...runPropsTypes} />);
    const runTimerButton = findByTestAtrr(wrapper, 'runTimerButton');
    const resetOrNothingTimerButton = findByTestAtrr(wrapper, 'resetOrNothingTimerButton');
    expect(runTimerButton.length).toBe(0);
    expect(resetOrNothingTimerButton.length).toBe(1);
  });
});
