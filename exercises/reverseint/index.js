// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    console.warn('input',n);
    debugger;
    let neg=false;
    if(n<0){
        neg = true;
        n = n.toString().split('-')[1];
    }
    let a = n.toString().split('').reverse().join('');
    let b = parseInt(a);
    let result = neg ? -b:b;
    console.warn('output',result);
    return result;
}

//https://medium.com/@josephcardillo/how-to-reverse-arrays-in-javascript-without-using-reverse-ae995904efbe

//Reversing an Array In-Place
/**
 * To review:

    We started at the beginning of the array in our for loop.
    We moved through the array until we reached the halfway point.
    With each loop we set the element at i — or arr[i] — equal to a variable called el.(save to a temp variable)
    Then we set the first element equal to the last, and the last element equal to the first.
    With each subsequent loop, as we moved inward we did the same thing.
 * @param {*} arr 
 */

function reverseArrayInPlace(arr) {
  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  console.warn('arr',arr);
  return arr;
}

// reverseInt(981)
reverseArrayInPlace([1,2,3,4,5,6,7]); 
module.exports = reverseInt;
