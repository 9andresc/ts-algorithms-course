export function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  for (let i = jumpAmount; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      for (let j = i - jumpAmount; j < i; j++) {
        if (breaks[j]) {
          return j;
        }
      }
    }
  }

  return -1;
}
