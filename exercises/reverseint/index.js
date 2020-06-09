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
// reverseInt(981)
module.exports = reverseInt;
