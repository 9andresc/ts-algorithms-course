import { binarySeach } from './binary-search';

test('binary seach array', () => {
  const array = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(binarySeach({ array, highIndex: array.length - 1, lowIndex: 0, value: 69 })).toEqual(true);
  expect(binarySeach({ array, highIndex: array.length - 1, lowIndex: 0, value: 1336 })).toEqual(false);
  expect(binarySeach({ array, highIndex: array.length - 1, lowIndex: 0, value: 69420 })).toEqual(true);
  expect(binarySeach({ array, highIndex: array.length - 1, lowIndex: 0, value: 69421 })).toEqual(false);
  expect(binarySeach({ array, highIndex: array.length - 1, lowIndex: 0, value: 1 })).toEqual(true);
  expect(binarySeach({ array, highIndex: array.length - 1, lowIndex: 0, value: 0 })).toEqual(false);
});
