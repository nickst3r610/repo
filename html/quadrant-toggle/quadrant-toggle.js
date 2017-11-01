document.addEventListener('click', function(event) {
    var target = event.target
   if (target.style.backgroundColor === "white") {
       target.style.backgroundColor = "black"
   } else {
       target.style.backgroundColor = "white"
   }
})