// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }
console.warn('rev342',reversed);
  return reversed;
}
reverse('abcd');
module.exports = reverse;
