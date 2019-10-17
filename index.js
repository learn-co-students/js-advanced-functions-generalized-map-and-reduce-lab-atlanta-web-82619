// Add your functions here

const map = function(array, callback) {
    let newArray = []
    array.forEach(item => newArray.push(callback(item)))
    return newArray
}

const reduce = function(array, callback, starting) {
    let result = starting ? starting : array[0]
    for (let i = starting ? 0 : 1; i < array.length; i++) {
        result = callback(array[i], result)
    }
    return result
}