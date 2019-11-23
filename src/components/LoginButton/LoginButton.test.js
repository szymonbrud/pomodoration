import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from 'Helpers';
import LoginButton from './LoginButton';

describe('LoginButton', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        textInButton: 'button text',
        action: () => {},
      };

      const propsError = checkProps(LoginButton, expectedProps);
      expect(propsError).toBeUndefined();
    });

    it('Should NOT throw a warning, check bad props', () => {
      const expectedProps = {
        textInButton: 2,
        action: () => {},
      };

      const propsError = checkProps(LoginButton, expectedProps);
      expect(propsError).toBeDefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        textInButton: 'button text',
        action: mockFunc,
      };
      wrapper = shallow(<LoginButton {...props} />);
    });

    it('Should Render a button', () => {
      const button = findByTestAtrr(wrapper, 'button');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on click event', () => {
      const button = findByTestAtrr(wrapper, 'button');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe('Render Icon', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        action: () => {},
        LogoActive: false,
      };
      wrapper = shallow(<LoginButton {...props} />);
    });

    it('Should NOT render a Icon', () => {
      const Icon = findByTestAtrr(wrapper, 'icon');
      expect(Icon.length).toBe(0);
    });
  });
});
