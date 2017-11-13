function newList() {
    var input =  document.querySelector("#fact")
    if (input.value) {
        var orderedList = document.querySelector("ol");
        var fact = document.createElement("li");
        fact.innerText = input.value
        orderedList.appendChild(fact)
        input.value = "";
    }
}

var listItems = document.querySelector("ol");

listItems.addEventListener("click", function (event) {
    var target = event.target
    if (target.tagName.toUpperCase() == 'LI') {
        target.style.textTransform = "uppercase"
        
    }
})

var submit = document.querySelector("#newFact");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    newList();
    
})
