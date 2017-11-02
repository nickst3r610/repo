var muffinKey = "muffinCnt"

function muffinChange(n) {
    var muffinCnt = Math.max(0, Number(window.localStorage.getItem(muffinKey)) + n)
    window.localStorage.setItem(muffinKey, muffinCnt)
    document
        .querySelector("#muffincnt")
        .innerText = window.localStorage.getItem(muffinKey)
}

document
    .querySelector("#eatone")
    .addEventListener('click',
        function(event) {
            muffinChange(-1)
        }
    )

document
    .querySelector("#bakefive")
    .addEventListener('click', 
       function (event) {
           muffinChange(5)
       }
    )

if (isNaN(Number(window.localStorage.getItem(muffinKey)))) {
    window.localStorage.setItem(muffinKey, 10)
}
muffinChange(0)


// var header = document.querySelector("h1")
// var muffinCount = window.localStorage.getItem("count")

// window.localStorage.setItem("count", muffinCount);

// function bake() {
//     muffinCount = parseInt(muffinCount) + 5;
//     window.localStorage.setItem("count", muffinCount);
//     console.log(muffinCount);
// }


// function eat() {
//         muffinCount -= 1;
//         window.localStorage.setItem("count", muffinCount);
// }

// function reset() {
//     muffinCount = 0
//     window.localStorage.setItem("count", muffinCount);
// }

// document.getElementById("bake").addEventListener("click", function (event) {
//     bake();
//     header.innerText = "Muffin Count: " + window.localStorage.getItem("count");
// })


// document.getElementById("eat").addEventListener("click", function (event) {
//     eat();
//     if (muffinCount < 1) {
//         header.innerText = "You're out of muffins!"
//         muffinCount = 0
//         window.localStorage.setItem("count", muffinCount)
//     } else {
//         header.innerText = "Muffin Count: " + window.localStorage.getItem("count");
//     }
// })
// document.getElementById("reset").addEventListener("click", function (event) {
//     reset();
//     header.innerText = "Muffin Count: " + window.localStorage.getItem("count");

// })

// header.innerText = "Muffin Count: " + window.localStorage.getItem("count");