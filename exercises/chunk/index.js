// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let tmp = []; 
    let result = []; 
    let a = [...array];  
    let len = a.length;  
    let count = Math.floor(len/size);
    if(len % size !== 0 ){
        count++;
    }
    console.warn('count',count);
    console.warn('array apread',...array);

    for( let i = 0 ; i< len; i+=size){ 
        console.warn('i',i);
        tmp = a.splice(0,size);
        result.push(tmp);    
    }  
    for (let i = 0 ; i< result.length; i++)  {
        console.warn(`result[${i}]=${result[i]}`);
    }  
    return result;    
}
function chunkThem(array, size) {
    const chunked = [];
    let index = 0;
  
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunked;
  }
chunk([1,2,3,4],2)
module.exports = chunk;
