function convertToNewRoman(n) {
  const obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    V: 5,
    IV: 4,
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

module.exports = convertToNewRoman;
