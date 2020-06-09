// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let len = str
      .toLowerCase()
      .split('')
      .filter(
        (x) => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'
      ).length;

    console.log(str)
    console.log(len)
    return len;

}

vowels('Why do you ask?');
vowels('Why?');

module.exports = vowels;
