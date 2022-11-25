const verify = require("./password-verifier");

test("Verify", function () {
  const password = "qwerTy1234";
  const outPut = verify(password);
  const expected = "Password accepted";
  expect(outPut).toEqual(expected);
});
test("Verify", function () {
  const password = "tre1234";
  const outPut = verify(password);
  const expected = "Password rejected";
  expect(outPut).toEqual(expected);
});
