function reverser(){
    var form= document.querySelector("form")
    form.addEventListener("submit", function(){
        event.preventDefault()
        var input = document.getElementById("input").value;
        var para = document.querySelector("p")
        para.innerHTML = input.split('').reverse().join('');
    })

 }
 reverser()