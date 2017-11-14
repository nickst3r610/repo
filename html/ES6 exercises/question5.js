var arr = [1,2,3,4,5];
const log = (val) =>  val.forEach(val => console.log(val));
const forEach = (arr, callback) => callback(arr)
forEach(arr, log); // logs 1, 2, 3, 4, 5