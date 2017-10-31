document.querySelector('body').style.backgroundColor = 'blue'
document.querySelectorAll('p.highlight').forEach(function(elem) {
elem.style.backgroundColor = "red"
}) 
var arr = document.querySelectorAll('li')
for (var i = 0; i < arr.length; i+=2) {
    arr[i].style.backgroundColor = '#8dc'  
}
let body = document.querySelector('body')
body.classList.remove('fgPink')
body.classList.add('color')