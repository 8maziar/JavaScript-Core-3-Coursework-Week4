let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  const words = ["irina", "etza", "daniel"];
  const outPut = removeVowelsFromWords(words);
  const expected = ["rn", "tz", "dnl"];

  expect(outPut).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
