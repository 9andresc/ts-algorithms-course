type Params = {
  array: number[];
  highIndex: number;
  lowIndex: number;
  value: number;
};

export function binarySeach({ array, highIndex, lowIndex, value }: Params): boolean {
  const midIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
  const midValue = array[midIndex];

  if (midValue === value) return true;
  if (highIndex === lowIndex) return false;
  if (midValue > value) {
    return binarySeach({ array, highIndex: midIndex, lowIndex, value });
  }
  return binarySeach({ array, highIndex, lowIndex: midIndex + 1, value });
}
