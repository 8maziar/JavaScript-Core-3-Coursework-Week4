// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const filtered = numbers.filter((item) => typeof item === "number");
  return filtered.reduce((p, c) => p + c, 0) / filtered.length;
}

module.exports = average;
