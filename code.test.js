const isLeapYear = require("./code");

describe("leap year checker:", () => {
  describe("a leap year is", () => {
    test("is divisible by 4", () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(2001)).toBe(false);
      expect(isLeapYear(2017)).toBe(false);
    });
    test("is not divisible by 100", () => {
      expect(isLeapYear(2004)).toBe(true);
    });
  });
});
