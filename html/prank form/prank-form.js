var input = document.querySelector("#input")
var para = document.querySelector("p")
var form = document.querySelector("form")

function prank() {
    para.innerText = "You typed: Meow"
}

function realInput() {
    setTimeout(function() {
        para.innerText = "JK! You typed: " + input.value
    }, 2000)
}

form.addEventListener("click", function(event) {
    event.preventDefault()
    if(input.value) {
        prank()
        realInput()
    }
})