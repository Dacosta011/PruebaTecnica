const generateFibonacci = (n: number): number[] => {
  if (n === 0) return [];
  if (n === 1) return [0];

  const fibonacci: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  return fibonacci;
};

export { generateFibonacci };
