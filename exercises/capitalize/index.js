// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ');
    console.warn('0 - str',str);
    console.warn('1 - arr',arr);

    for( let i = 0 ; i< arr.length; i++){
        let chars = arr[i].split('');
        let firstChar = chars[0].toUpperCase();
        chars[0] = firstChar;
        console.warn('2 - chars',chars);
        arr[i] = chars.join('');
        
        console.warn('3 - arr',arr[i]);

    } 
    console.warn('4 - arr',arr);     
    
    let result = arr.join(' ');
    console.warn('5 - res',result);
    return result;

}
capitalize('look, it is working!');
console.warn('end',);
module.exports = capitalize;
