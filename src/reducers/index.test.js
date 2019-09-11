import { POMODORO_NAME } from 'actions';
import { pomdoroName } from 'reducers';

describe('Reducers', () => {
  it('Should return a initial state', () => {
    expect(pomdoroName(undefined, {})).toEqual({
      name: '',
    });
  });

  it('Should handle name', () => {
    expect(
      pomdoroName([], {
        type: POMODORO_NAME,
        payload: {
          name: 'programming',
        },
      }),
    ).toEqual({
      name: 'programming',
    });
  });
});
