// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    console.warn('stringA',stringA);
    console.warn('stringB',stringB);
    let result = true;

    let a = stringA.replace(/[^\w]/g,'').toLowerCase();
    let b = stringB.replace(/[^\w]/g,'').toLowerCase();
    let lena = a.length;
    let lenb = b.length;

    let mapa = {};
    let mapb = {};
    
    a.split('').forEach(x => {
        if(!mapa[x]){
            mapa[x]=1;
        }else{
            mapa[x]++;
        }
    });

    b.split('').forEach(x => {
        if(!mapb[x]){
            mapb[x]=1;
        }else{
            mapb[x]++;
        }
    });

    console.table(mapa); 
    console.table(mapb);
 
    if(lena>=lenb){
        Object.keys(mapa).forEach(x=>{
            let bkeys = Object.keys(mapb); 
            let find = bkeys.filter(a=>a===x).length;
            if(find>0){
                result = result&& (mapa[x]===mapb[x]);
            }else{
                result = false;
            }
        })
    }else{
        Object.keys(mapb).forEach(x=>{
            let akeys = Object.keys(mapa); 
            let find = akeys.filter(b=>b===x).length;
            if(find>0){
                result = result&& (mapa[x]===mapb[x]);
            }else{
                result = false;
            }
        })
 
    } 
    console.warn('res',result);
    return result ;
}
anagrams('rail safety', 'fairy talea')
module.exports = anagrams;
