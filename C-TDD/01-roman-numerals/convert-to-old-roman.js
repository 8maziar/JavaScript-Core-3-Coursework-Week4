function convertToOldRoman(n) {
  const obj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let res = "";

  for (let i in obj) {
    while (n >= obj[i]) {
      n -= obj[i];
      res += i;
    }
  }
  return res;
}

module.exports = convertToOldRoman;
