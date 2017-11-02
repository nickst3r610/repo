// document.addEventListener('click', function(event) {
//     var target = event.target.style
//    if (target.backgroundColor === "white") {
//        target.backgroundColor = "black"
//    } else {
//        target.backgroundColor = "white"
//    }
// })


document.addEventListener('click', function(event) {
    var target = event.target.style
    target.backgroundColor = target.backgroundColor === "lightblue" ? "salmon" : "lightblue"
})
