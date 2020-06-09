// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    debugger;
    let a=[];
    str.split('').forEach(x=>{
        let foundIdx = a.findIndex((y,i)=> {
            return (y.key === x)
        })
        if(!a.find(z=>z.key ===x)){
            a.push({key:x,val:1});
        }else if(foundIdx !== -1 ){
            let oldval = a[foundIdx].val;
            a[foundIdx].val =  oldval+1;
        }
    })
    console.table(a);   
    let maxval = Math.max(... a.map(x=>x.val));
    let result = a.find(x=>x.val === maxval);
    console.warn('max cha',Math.max(... a.map(x=>x.val)));
    console.warn('result', result.key);
    return result.key
}
maxChar('ab1c1d1e1f1g1');
module.exports = maxChar;
