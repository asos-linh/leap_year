const isLeapYear = require("./code_2");

describe("leap year checker:", () => {
  test("year 2000 returns true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  test("year 2017 returns false", () => {
    expect(isLeapYear(2017)).toBe(false);
  });
  test("year 2001 returns false", () => {
    expect(isLeapYear(2001)).toBe(false);
  });
  test("year 1996 returns true", () => {
    expect(isLeapYear(1996)).toBe(true);
  });
  test("year 1900 returns false", () => {
    expect(isLeapYear(1900)).toBe(false);
  });
});
