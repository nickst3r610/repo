const stringsToNums = arr =>  arr.map(elem => Number(elem));
const stringsToNums = arr =>  arr.map(Number);
console.log(stringsToNums(["1","2","3","4","5"]))