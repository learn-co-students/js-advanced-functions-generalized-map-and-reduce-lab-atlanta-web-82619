// Add your functions here
const map = function(arr, cb) {
    let newArr = []
    for(let i=0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}

//why did the order of arguments matter
const reduce = function(arr, cb, total) {
    let result = total ? total : arr[0]
    let i = total ? 0 : 1
    for(; i < arr.length; i++) {
        result = cb(arr[i], result)
    }
    return result
}
