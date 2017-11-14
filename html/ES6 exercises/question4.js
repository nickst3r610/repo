let forEachSum = arr => {
    let sum = 0
    arr.forEach(elem => { sum += elem })
    return sum
};
// const getEvens = (arr) =>  arr.forEach(num => num + num);

console.log(forEachSum([1,2,3,4,5]))