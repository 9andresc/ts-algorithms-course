import { bubbleSort } from './bubble-sort';

test('bubble sort', () => {
  const array = [9, 3, 7, 4, 69, 420, 42];

  bubbleSort(array);
  expect(array).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
