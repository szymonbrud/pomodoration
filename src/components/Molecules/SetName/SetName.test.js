import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { pomdoroName } from 'reducers';
import SetName from './SetName';

const allStoreEnchancers = compose(applyMiddleware(thunk));

const allReducers = combineReducers({
  pomdoroName,
});

const store = createStore(allReducers, allStoreEnchancers);

const InitStateComp = cmp => {
  return render(<Provider store={store}>{cmp}</Provider>);
};

describe('SetName Component', () => {
  afterEach(cleanup);

  it('Open lists on click', () => {
    const { getByText, getByTestId } = InitStateComp(<SetName />);

    const button = getByText('co dziś robimy?');
    fireEvent.click(button);

    const styleWrapper = window.getComputedStyle(getByTestId('wrapperCelecter'));
    expect(styleWrapper.display).toBe('block');
  });

  it('Open bottom Bar when add_new_name has been clicked', () => {
    const { getByText, getByTestId } = InitStateComp(<SetName />);

    const button = getByText('co dziś robimy?');
    fireEvent.click(button);

    const openBottomBarButton = getByText('+dodaj nazwę');
    fireEvent.click(openBottomBarButton);

    const bottomBar = getByTestId('bottomBarMainWrapper');
    const styleButtonBarMainWrapper = window.getComputedStyle(bottomBar);
    expect(styleButtonBarMainWrapper.transform).toBe('translateY(0%)');
  });

  it('Should do NOT open Bottom bar', () => {
    const { getByTestId } = InitStateComp(<SetName />);

    const bottomBar = getByTestId('bottomBarMainWrapper');
    const styleButtonBarMainWrapper = window.getComputedStyle(bottomBar);
    expect(styleButtonBarMainWrapper.transform).toBe('translateY(100%)');
  });

  it('Should close a Bottom bar', () => {
    const { getByText, getByTestId } = InitStateComp(<SetName />);

    const button = getByText('co dziś robimy?');
    fireEvent.click(button);

    const openBottomBarButton = getByText('+dodaj nazwę');
    fireEvent.click(openBottomBarButton);

    const closeButton = getByText('back');
    fireEvent.click(closeButton);

    const bottomBar = getByTestId('bottomBarMainWrapper');
    const styleButtonBarMainWrapper = window.getComputedStyle(bottomBar);
    expect(styleButtonBarMainWrapper.transform).toBe('translateY(100%)');
  });
});
