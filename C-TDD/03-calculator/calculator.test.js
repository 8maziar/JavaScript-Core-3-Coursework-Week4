const add = require("./calculator");

test("Add", function () {
  const numbers = "1,4,5,-1,-99";
  const outPut = add(numbers);
  const expected = "negatives not allowed: -1,-99";
  expect(outPut).toEqual(expected);
});
test("Add", function () {
  const numbers = "3,6,11";
  const outPut = add(numbers);
  const expected = "20";
  expect(outPut).toEqual(expected);
});
