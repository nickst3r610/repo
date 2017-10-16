// var test = [7, 1, 6, 11, 2, 1, 111, 0, 8, 9]

// function sortArray(array){
//    var oddIndexArr = []
//    var oddNums = []
//     for (var i = 0; i < array.length; i++){
//         if (array[i] % 2 !== 0){
//             oddIndexArr.push(array.indexOf(array[i]))
//             oddNums.push(array[i])
//         }
//     }

//     var sortedOdd = oddNums.sort(function(a, b){return a-b})
//     console.log(oddNums)
//    for (var t = 0; t < oddNums.length; t++){
//        array[oddIndexArr[t]] = oddNums[t]
//    }
//    //console.log(oddNums)
//    //console.log(oddIndexArr)
//    //console.log(oddNums)
//    //console.log(sortedOdd)
//    return array 
// }
// console.log(sortArray(test))




//var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'
// var pattern = / [a-z]{3} / // --> first 3letter word
// var pattern = / [a-z]{5}[ .]/ // --> return last word that is 5letters
// var pattern = /\w+\.$/ // --> last word of string with period
// var pattern = /\b\w{3}\b/ // --> 'the' boundaries like space
//var pattern = /\b\w{3}\b/g

// [A-Z]? === [A-Z] {0, 1}
// [A-Z]* === [A-Z] {0, }
// [A-Z]+ === [A-Z] {1, }

//console.log(text.match(pattern))
//console.log(pattern.exec(text))


// var text1 = 'Luna\'s fun.'
// var pattern = /\b\w+\b/
// console.log(text1.match(pattern))

// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];
// var pattern = /\d{1,2}\/\d{1,2}\/(\d{2,4})/

// for (var i = 0; i < dates.length; i++) {
//     var date = dates[i]

//     console.log(date.match(pattern))

//}
//console.log(dates.match(pattern))

//console.log(pattern.exec(text))


// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';

// var pattern = /(<[\a-z/]+>)/g

// console.log(html.match(pattern))


// const fs = require('fs')

// fs.unlink('/tmp/hello', (err) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('successfully deleted /tmp/hello')
// })



// try {
//     console.log(undefined.length)
// } catch (ex) {
//     console.log(ex)
// }
// console.log("I'm alive!")



// var fs = require('fs')

// fs.readFile('dirlist.txt', function (err, file) {
//   if (err) throw err
//   var text = file.toString()

//   var array = text.split('\n')
//   for (var i = 0; i < array.length; i++) {
//       var row = array[i]

//       var columns = row.split(/ +/)
// //      var filename = columns[8]
// //      if (filename === undefined) {
// //      continue;
// //}
//       console.log(columns)
//   }
// })

var list1 = [
    { firstName: 'Maria', lastName: 'Y.', age: 30, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', age: 35, language: 'Python' },
];
// function getAverageAge(array) {
//     var newArray = [];
//     array.map(function (number) {
//         return newArray.push(number.age)
//     })
//     return newArray.reduce(function (number, number2) {
//         return (Math.round(((number + number2)) / 2));
//     });

// }


isPalindrome = (str)  => str === str.split('').reverse().join('')

console.log(isPalindrome('hellolleh'))
