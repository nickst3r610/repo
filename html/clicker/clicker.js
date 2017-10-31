var body = document.querySelector("body")

document.addEventListener("click", function(event) {
    event.preventDefault()
    if (event.clientX < (window.innerWidth / 2)) {
        body.style.backgroundColor = "mediumaquamarine"
    } else {
        body.style.backgroundColor = "peachpuff"
    }
console.log("test");

})

