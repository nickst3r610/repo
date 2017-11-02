var textBox = document.querySelector("textarea")

textBox.addEventListener("input", function(event) {
    window.localStorage.setItem("newText", textBox.value)
})
textBox.value = window.localStorage.getItem("newText");