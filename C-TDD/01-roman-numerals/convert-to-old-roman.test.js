let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  const num = 1420;
  const outPut = convertToOldRoman(num);
  const expected = "MCCCCXX";
  expect(outPut).toEqual(expected);
});
