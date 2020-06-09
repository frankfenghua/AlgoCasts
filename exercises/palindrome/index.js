// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    debugger;
    return str.split('').every((x,i)=> {
        console.log(i);
        return x === str[str.length -i-1];
    })
}
function palindrome2(str) {
    debugger;
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }
  let test = palindrome('abcba');
  console.warn('test',test);

  module.exports = palindrome;
  
  // function palindrome(str) {
  //   const reversed = str
  //     .split('')
  //     .reverse()
  //     .join('');
  //
  //   return str === reversed;
  // }
  