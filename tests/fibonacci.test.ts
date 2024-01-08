import { generateFibonacci } from "../src/utils/fibonacci";

describe("Fibonacci", () => {
  test("should return the correct fibonacci sequence", () => {
    const sequence = generateFibonacci(10);
    expect(sequence).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test("should return an empty array if n is 0", () => {
    const sequence = generateFibonacci(0);
    expect(sequence).toEqual([]);
  });

  test("should return [0] if n is 1", () => {
    const sequence = generateFibonacci(1);
    expect(sequence).toEqual([0]);
  });
});
