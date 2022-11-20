function add(numbers) {
  if (!numbers) return "0";

  const filtered = numbers.split(",").filter((num) => num < 1000);
  if (filtered.some((num) => num < 0))
    return `negatives not allowed: ${filtered
      .filter((num) => num < 0)
      .join(",")}`;

  return filtered.reduce((p, c) => p + +c, 0).toString();
}

module.exports = add;
