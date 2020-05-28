const exactMatch = /(pk|sk)_(test|live)_[A-Za-z0-9]{24}/;
const looseMatch = /(pk|sk)_(test|live)_[A-Za-z0-9]+/;

function isStripeKey(string = '', { exact = true } = {}) {
  const reg = exact ? exactMatch : looseMatch;
  return reg.test(string.trim());
}
module.exports = isStripeKey;
