const basePattern = '(pk|sk)_(test|live)_[A-Za-z0-9]';

const exactMatch = new RegExp(`${basePattern}{24}`); // /(pk|sk)_(test|live)_[A-Za-z0-9]{24}/;
const looseMatch = new RegExp(`${basePattern}+`); // /(pk|sk)_(test|live)_[A-Za-z0-9]+/;

function isStripeKey(string = '', { exact = true } = {}) {
  const pattern = exact ? exactMatch : looseMatch;
  const reg = new RegExp(`^${pattern}$`);
  return reg.test(string.trim());
}

function containsStripeKey(string = '', { exact = true } = {}) {
  const pattern = exact ? exactMatch : looseMatch;
  const reg = new RegExp(pattern, 'g');

  return reg.test(string.trim());
}
module.exports = isStripeKey;

const key = 'sk_live_vQp5vQIibsjlRWJm5nkMobJW00K8o8uW7q';

console.log(isStripeKey(`hello${key}`));
