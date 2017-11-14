const min = arr => arr.reduce((min, num) => {
    return num < min ? num : min
})

console.log(min([2,3,4,5,1,2,3,0,6]))