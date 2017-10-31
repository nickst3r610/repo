var h1 = document.querySelector("h1")
var str = ""
var special = ".!?"

document.addEventListener("keypress", function(event){
    event.preventDefault();
    if (event.key === event.key.toUpperCase()) {
        h1.style.textDecoration = "underline"
    }
    if (special.includes(event.key)) {
        h1.style.textDecoration = "none"
    }
    str += event.key
    h1.innerText = str

})