import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ShowHistoryOfTimeButton from './ShowHistoryOfTimeButton';

describe('ShowHistoryOfTimeButton', () => {
  describe('Position of HistoryPomodoro', () => {
    afterEach(cleanup);
    it('Check style of HistoryPomodoro', () => {
      const { getByTestId } = render(<ShowHistoryOfTimeButton />);
      const content = getByTestId('content');
      const styledContent = window.getComputedStyle(content);
      expect(styledContent.transform).toBe('translateY(100%)');
    });

    it('Check style after click button', () => {
      const { getByTestId } = render(<ShowHistoryOfTimeButton />);
      const button = getByTestId('openButton');
      fireEvent.click(button);
      const styledContext = window.getComputedStyle(getByTestId('content'));
      expect(styledContext.transform).not.toBe('translateY(100%)');
    });
  });
});
