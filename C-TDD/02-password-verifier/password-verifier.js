function verify(pass) {
  if (pass.length < 8) {
    return "Password rejected";
  }
  if (pass === null) {
    return "Password rejected";
  }
  if (!/[A-Z]/g.test(pass)) {
    return "Password rejected";
  }
  if (!/[0-9]/g.test(pass)) {
    return "Password rejected";
  }

  return "Password accepted";
}

module.exports = verify;
