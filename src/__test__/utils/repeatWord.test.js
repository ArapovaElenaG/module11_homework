import { repeatWord } from '../../utils/repeatWord';

describe (('test repeatWord'), () => {
  it (('repeatWord must return string with the number of words as count'), () => {
    expect(repeatWord('World', 3)).toBe('World1, World2, World3');
  }),

  it (('repeatWord must return empty string'), () => {
    expect(repeatWord('Hello', 0)).toBe('');
  });
});