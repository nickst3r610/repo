const slice = (arr,num) => {
    const endInd = arr.length + num;
    return arr.slice(0, endInd)
}

const rotate = (arr,num) => {
    for(let i= 0; i < num; i++) {
        let popped = arr.pop();
        arr.unshift(popped)
    }
    return arr;
}

module.exports = {
    slice: slice,
    rotate: rotate
}

//console.log(module.exports)