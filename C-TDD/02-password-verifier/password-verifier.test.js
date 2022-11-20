const verify = require("./password-verifier");

test("Verify", function () {
  const password = "qwerTy1234";
  const outPut = verify(password);
  const expected = "Password accepted";
  expect(outPut).toEqual(expected);
});
