var input = window.prompt("Input number as word");
var input2 = window.prompt("Input second number as word")
var hold = document.getElementById(input).innerHTML
document.getElementById(input).innerHTML = document.getElementById(input2).innerHTML
document.getElementById(input2).innerHTML = hold