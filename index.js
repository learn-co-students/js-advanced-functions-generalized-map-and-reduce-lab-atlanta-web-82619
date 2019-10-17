// Add your functions here
function map(arr, cb) {
    let ret = []
    for(let i = 0; i < arr.length; i++) {
        ret.push(cb(arr[i]));
    }
    return ret;
}

function reduce(arr, cb, start) {
    let c = 0;
    let ret = null

    if (start === undefined){
        ret = arr[0];
        c = 1;
    }
    else {
        ret = start;
    }

    for (let i = c; i < arr.length; i++) {
        ret = cb(arr[i], ret);
    }
    return ret;
}