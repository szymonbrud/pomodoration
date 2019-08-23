import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from 'Utils';
import TopBar from './TopBar';

describe('TopBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TopBar />);
  });

  it('Should render TopBarWrapper without errors', () => {
    const TopBarWrapper = findByTestAtrr(wrapper, 'TopBarWrapper');
    expect(TopBarWrapper.length).toBe(1);
  });
  it('Should render burger without errors', () => {
    const burger = findByTestAtrr(wrapper, 'burger');
    expect(burger.length).toBe(1);
  });
  it('Should render icon without errors', () => {
    const icon = findByTestAtrr(wrapper, 'icon');
    expect(icon.length).toBe(1);
  });

  it('Should render Text without errors', () => {
    const Text = findByTestAtrr(wrapper, 'Text');
    expect(Text.length).toBe(1);
  });
});
