function createTodo(description, completed) {
    var todo = {
        description: description,
        completed: completed
    }

    return todo
}

function addTodo(todoArr, todo) {
    return todoArr.concat(todo)
}

function logTodo(todo, i) {
    console.log(`${i}. ${todo.description}. Completed: ${todo.completed}\n`)
}

function forEachArr(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i + 1)
    }
}

var todoArr = []

var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}


var options = 'add, toggle [number], show all/active/completed'

rl.on('line', function (input) {

    clear()
    console.log("Things to do\n")
    var array = input.trim().split(' ')

    if (array[0].toLowerCase() === 'add') {
        array.splice(0, 1)
        array.push(false)
        var array = createTodo(array.splice(0, array.length - 1).join(' '), array[array.length - 1])
        todoArr = addTodo(todoArr, array)
        forEachArr(todoArr, logTodo)
        console.log('Please choose one of following [' + options + ']')
    } else if ((array[0].toLowerCase() === 'toggle')) {
        todoArr[(Number(array[1][1])) - 1].completed = true
        console.log('The task is now completed\n')
        console.log('Please choose one of following [' + options + ']')
    } else if (array[0].toLowerCase() === 'show') {
        if (array[1] === 'all') {
            for (var i = 0; i < todoArr.length; i++) {
                console.log(`${i + 1}. ${todoArr[i].description}. Completed: ${todoArr[i].completed}\n`)                
            }
             console.log('Please choose one of following [' + options + ']')     
        } else if (array[1] === 'active') {
            for (var i = 0; i < todoArr.length; i++) {
                if(todoArr[i].completed === false) {
                    console.log(`${i + 1}. ${todoArr[i].description}. Completed: ${todoArr[i].completed}\n`)
                }                
            }
            console.log('Please choose one of following [' + options + ']')              
        } else if (array[1] === 'completed') {
            for (var i = 0; i < todoArr.length; i++) {
                if(todoArr[i].completed === true) {
                    console.log(`${i + 1}. ${todoArr[i].description}. Completed: ${todoArr[i].completed}\n`)
                 }
            }
            console.log('Please choose one of following [' + options + ']')      
        }
    } else {
        console.log('Choose one of the options [' + options + ']')
        console.log('For add, please follow by the description of the thing to do\n\n')
    }

})
clear()
console.log("List of things to do\n\n")
console.log('Please choose one of following [' + options + ']')
console.log('For add, please follow by the description of the thing to do\n\n')