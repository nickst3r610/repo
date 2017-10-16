// function getDateBefore(date, days) {
//     var newDate = date.setDate(date.getDate() - days)
//     var timestamp = new Date(newDate) 
//     return timestamp
// }

// var now = new Date()
// console.log(getDateBefore(now, 1))



// function Dog(name, breed, weight) {
//     // this = {}
//     this.name = name
//     this.breed = breed
//     this.weight = weight
//     //return this
// }
// var charlie = new Dog('Charlie', 'Mixed', 38)
// console.log(charlie.name)

// function add1(num){
//     return num + 1;
// }
// console.log(add1.prototype)
// console.log(add1.prototype.constructor)
// console.log(add1.prototype.constructor === add1)
// // add1 {}


// function Rabbit(type) {
//     this.type = type;
//   }

//   var killerRabbit = new Rabbit("killer");
//   var blackRabbit = new Rabbit("black");

//   console.log(Rabbit.name)
//   console.log(killerRabbit)
//   console.log(blackRabbit)
// function Vector(x, y) {
//     this.x = x
//     this.y = y
// }
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// var v3 = new Vector(3, 4)


// Vector.prototype.plus = function (vector) {
//     var x = ((v1.x + v2.x))
//     var y = ((v1.y + v2.y))
//     return new Vector(x, y)
// }

// Vector.prototype.minus = function (vector) {
//     var x = ((v1.x - v2.x))
//     var y = ((v1.y - v2.y))
//     return new Vector(x, y)
// }

// Vector.prototype.getLength = function () {
//     return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
// }

// console.log(v1.plus(v2))
// console.log(v1.minus(v2))
// console.log(v1.getLength())





function countZeroes(array) {
    var counter = 0
    var zero = array.reduce(function (arr, str){
        if (arr === 0 || str === 0) {
           return counter++
        }
    })
    return counter - 1
}


console.log( countZeroes([2, 4, 0, 2, 9, 0, 0, 5, 9, 0, 8] ));
console.log( countZeroes([1, 2, 0, 12, 0, 3, 0, 0, 0, 0, 9, 0] ));

function countZeroes(array){
    var counter = 0
    var zeros = array.reduce(function(a,b){
        if(a === 0 || b === 0){
            counter++
            return a + b
        }else{
            return a + b
        }
    })
    return counter
}

console.log( countZeroes([2, 4, 0, 2, 9, 0, 0, 5, 9, 0, 8] ));
console.log( countZeroes([1, 2, 0, 12, 0, 3, 0, 0, 0, 0, 9, 0] ));


