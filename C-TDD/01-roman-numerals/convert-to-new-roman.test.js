let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  const num = 1900;
  const outPut = convertToNewRoman(num);
  const expected = "MCM";
  expect(outPut).toEqual(expected);
});
