module.exports = year => {
  return (
    (isDivisibleBy4(year) && isNotDivisibleBy100(year)) ||
    isDivisibleBy400(year)
  );
};

function isDivisibleBy4(year) {
  return year % 4 === 0;
}

function isNotDivisibleBy100(year) {
  return year % 100 !== 0;
}

function isDivisibleBy400(year) {
  return year % 400 === 0;
}
