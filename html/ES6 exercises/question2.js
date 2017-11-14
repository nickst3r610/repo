// let greaterThan10 = arr => {
//     let newArr = []
//     arr.forEach(elem => {
//         if (elem > 10) {
//             newArr.push(elem)
//         }
//     })
//     return newArr
// };

// console.log(greaterThan10([11,1,2,3,4,11,22,33]))

// -------------------------------------

const arr = [1,2,3,11,22,33]
const greaterThan10 = (arr) =>  arr.filter(num => num>10 );
// let greaterThan10 = arr.filter(num => num>10 );

console.log(greaterThan10([1,2,3,22,11,33]))