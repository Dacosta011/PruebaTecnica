import { validateLeapYear } from "../src/utils/leapYear";

describe("Leap Year", () => {
  test("should return true if year is divisible by 4", () => {
    const year = validateLeapYear(2020);
    expect(year).toEqual(true);
  });

  test("should return false if year is not divisible by 4", () => {
    const year = validateLeapYear(2021);
    expect(year).toEqual(false);
  });

  test("should return true if year is divisible by 400", () => {
    const year = validateLeapYear(2000);
    expect(year).toEqual(true);
  });

  test("should return false if year is divisible by 100 but not by 400", () => {
    const year = validateLeapYear(1900);
    expect(year).toEqual(false);
  });
});
