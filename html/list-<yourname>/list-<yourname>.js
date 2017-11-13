// document.addEventListener("click", function (event) {
//     var list = document.getElementById("list");
//     var newItems = document.createElement("li");
//     newItems.innerText = `X: ${event.clientX} Y: ${event.clientY}`
//     // console.log(newItems)
//     list.appendChild(newItems)

// });

// var button = document.querySelector("#clear")
// button.addEventListener("click", function (event) {
//     var list = document.getElementById("list")
//     var listItems = document.querySelectorAll('li')
//     // console.log(listItems)
//     for (var i = 0; i < listItems.length; i++) {
//         list.removeChild(listItems[i])
//     }
// })


//------------------------------------------------------

var list = document.querySelector('ol')
var clear = document.querySelector('button')


document.addEventListener('click',function(){
    if(event.target === clear){
        list.innerHTML = ""
    } else {
        var listItem = document.createElement('li')
        listItem.innerText = 'X coordinate: ' + event.clientX + ' Y coordinate: ' + event.clientY 
        list.appendChild(listItem)
    }
})

//-----------------------------------------------------


