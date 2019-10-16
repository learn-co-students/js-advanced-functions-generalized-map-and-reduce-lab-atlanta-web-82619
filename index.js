// Add your functions here
const map = function(array, callback){
    let newArray = [];
    for (let i = 0; i < array.length; i++ ){
        newArray.push(callback(array[i]))
    }
    return newArray;
} 

const reduce = function(array, callback, initial){
    let total = initial ? initial : array[0];
    let i = initial ? 0 : 1;
    for(; i < array.length; i++){
        total = callback(array[i], total);
    }
    return total
}