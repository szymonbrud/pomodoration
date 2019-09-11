import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from 'Utils';
import Timer from './Timer';

describe('Timer', () => {
  const expectedPropsForRun = {
    status: 'run',
    ItsTime: 1000,
  };

  const expectedPropsForPause = {
    status: 'pause',
    ItsTime: 1000,
  };

  const expectedPropsForReset = {
    status: 'reset',
  };

  const expectedBadProps = {
    status: 2389423,
    ItsTime: false,
  };
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning, status RUN', () => {
      const propsError = checkProps(Timer, expectedPropsForRun);
      expect(propsError).toBeUndefined();
    });
    it('Should NOT throw a warning, status PAUSE', () => {
      const propsError = checkProps(Timer, expectedPropsForPause);
      expect(propsError).toBeUndefined();
    });
    it('Should NOT throw a warning, status RESET', () => {
      const propsError = checkProps(Timer, expectedPropsForReset);
      expect(propsError).toBeUndefined();
    });
    it('Should NOT throw a warning, status Bad Props', () => {
      const propsError = checkProps(Timer, expectedBadProps);
      expect(propsError).toBeDefined();
    });
  });
  describe('Checking render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        status: 'run',
        ItsTime: 1000,
      };
      wrapper = shallow(<Timer {...props} />);
    });
    it('Should render a button pause', () => {
      const button = findByTestAtrr(wrapper, 'pauseButton');
      expect(button.length).toBe(1);
    });
  });
});
