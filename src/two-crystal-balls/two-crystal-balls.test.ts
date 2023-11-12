import { twoCrystalBalls } from './two-crystal-balls';

test('two crystal balls', () => {
  const length = 1000;
  const idx = Math.floor(Math.random() * length);
  const data = Array(length).fill(false);

  for (let i = idx; i < length; i++) {
    data[i] = true;
  }

  expect(twoCrystalBalls(data)).toBe(idx);
  expect(twoCrystalBalls(new Array(500).fill(false))).toBe(-1);
});
