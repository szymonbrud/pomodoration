import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Timer from './Timer';

// it('Shuold debug without error :D ', () => {
//   const { debug } = render(<Timer />);
//   debug();
// });

// it('Should checkText', () => {
//   const { debug } = render(<Timer status="pause" ItsTime={1000} />);
//   debug();
// });

describe('Timer', () => {
  const runProps = {
    status: 'run',
    ItsTime: 1000,
  };

  const pauseProps = {
    status: 'pause',
    ItsTime: 1000,
  };

  const resetProps = {
    status: 'reset',
  };

  describe('render with each props', () => {
    it('Should render a run action without err', () => {
      const { getByText, getByTestId } = render(<Timer {...runProps} />);
      getByText('pause');
      const counter = getByTestId('counter');
      expect(counter.textContent.length).toBe(7);
    });

    it('Should render a pause without err', () => {
      const { getByText, getByTestId } = render(<Timer {...pauseProps} />);
      getByText('wznow');
      getByText('reset');
      const counter = getByTestId('counter');
      expect(counter.textContent.length).toBe(7);
    });

    it('Should redner a reset without err', () => {
      const { getByText } = render(<Timer {...resetProps} />);
      getByText('start');
    });
  });
});

// it('Should render a button when status is pause');

// it('should render without err', () => {
//   const { renderor } = render(<Timer />);
// });

// import React from 'react';
// import { shallow, render, mount } from 'enzyme';
// import { checkProps, findByTestAtrr } from 'Utils';
// import Timer from './Timer';

// describe('Timer', () => {
//   const wrapper = shallow(<Timer />);
//   it('Should render without errors, enzyme', () => {
//     console.log(wrapper.debug());
//     const TimerWrapper = findByTestAtrr(wrapper, 'timerWrapper');
//     expect(TimerWrapper.length).toBe(1);
//   });
// });

// @TODO: wymyślić jak będzie wyglądał kod, potem to co zostanie takie samo przetesować
// @TODO: 1) przeprojektować to, aby może też był redux
// @TODO: 2) przetestować, jeśli się nie uda to napisać na dc o pomoc
