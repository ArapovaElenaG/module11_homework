import { getPercents } from '../../utils/getPercents';

describe (('test getPercents'), () => {
  it (('getPercents must return persents from number'), () => {
    expect(getPercents(30, 200)).toBe(60);
    expect(getPercents(1, 500)).toBe(5);
  });
});