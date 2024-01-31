test("One Euro should be 1.07 dollars", () => {
  const { fromEuroToDollar } = require("./app.js");
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(dollars).toBe(parseFloat(expected.toFixed(2)));
});

test("One Dollar should be 167,455 yens", () => {
  const { fromDollarToYen } = require("./app.js");
  const yens = fromDollarToYen(3.5);
  const expected = 3.5 * 1.07 * 156.5;
  expect(yens).toBe(parseFloat(expected.toFixed(2)));
});

test("One Yen should be 167,46 pounds", () => {
  const { fromYenToPound } = require("./app.js");
  const pounds = fromYenToPound(3.5);
  const expected = 0.87 * 156.5 * 3.5;
  expect(pounds).toBe(parseFloat(expected.toFixed(2)));
});
