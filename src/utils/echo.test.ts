import { echo } from './echo';

test('echo function', () => {
  const str = 'hello world';
  expect(echo(str)).toBe(str);
});
