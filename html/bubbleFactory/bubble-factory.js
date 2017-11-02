// document.addEventListener("click", function(event) {
//    var img = document.createElement("img")
//    var body = document.querySelector("body")
//    if (event.target === document.querySelector('button')) {
//        img.src= "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fbubbles-png-22.png"
//        img.style.width = "50px"
//        body.appendChild(img)
//    }
// })



document.addEventListener("DOMContentLoaded", function(event) {
    let button = document.querySelector("button");

    button.addEventListener("click", function(event) {
        console.log( Math.round(Math.random() * 100 ));
        let bubble = document.createElement("img");
        bubble.src = "https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fbubbles-png-22.png";
        bubble.style.height = Math.round(Math.random() * 50 + 10 ).toString() + "px";
        bubble.style.top = Math.round(Math.random() * 95 ).toString() + "%";
        bubble.style.left = Math.round(Math.random() * 99 ).toString() + "%";
        bubble.style.position = "fixed";

        document.body.appendChild(bubble);
    })
})