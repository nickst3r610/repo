// var arr = [1,2,3,4,5];
// const log = (val) =>  val.forEach(val => console.log(val));
// const forEach = (arr, callback) => callback(arr)
// forEach(arr, log); // logs 1, 2, 3, 4, 5

function map(arr, callback) {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    return newArr
}

console.log(map([1,2,3], num => num * 2))