document.addEventListener("click", function(event) {
   var img = document.createElement("img")
   var body = document.querySelector("body")
   if (event.target === document.querySelector('button')) {
       img.src= "bubble.png"
       body.appendChild(img)
   }
})