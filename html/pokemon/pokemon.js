// var allLi = document.querySelectorAll('li');
document.addEventListener('click', function(event) {
    if (event.target.nodeName === "LI") {
        console.log(event.target)
    }      
})