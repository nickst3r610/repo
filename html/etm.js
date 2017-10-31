var arr = document.querySelectorAll('p')
for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        arr[i].classList.add('bgGreen') 
    } else {
        arr[i].classList.add('bgYellow')
    }
}