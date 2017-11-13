// document.querySelector("#conbin").addEventListener("click", function () {
//     var number = document.querySelector("#num").value
//     fetch("http://codyhess.com:9000/" + number, {
//         mode: "no-cors"
//     })
//         .then(function (response) {
//            return response.json()
//         })
//         .then(function (number) {
//             document.querySelector("#number").innerText = number.value
//             document.querySelector("#base").innerText = number.base
//             document.querySelector("#bin").innerText = number.binary
//             document.querySelector("#dec").innerText = number.decimal
//             document.querySelector("#hex").innerText = number.hex
//         })
// })
// document.querySelector("#condec").addEventListener("click", function () {
//     var number = document.querySelector("#num").value
//     fetch("http://codyhess.com:9000/" + number, {
//         mode: "no-cors"
//     })
//         .then(function (response) {
//            return response.json()
//         })
//         .then(function (number) {
//             document.querySelector("#number").innerText = number.value
//             document.querySelector("#base").innerText = number.base
//             document.querySelector("#bin").innerText = number.binary
//             document.querySelector("#dec").innerText = number.decimal
//             document.querySelector("#hex").innerText = number.hex
//         })
// })
// document.querySelector("#conhex").addEventListener("click", function () {
//     var number = document.querySelector("#num").value
//     fetch("http://codyhess.com:9000/" + number, {
//         mode: "no-cors"
//     })
//         .then(function (response) {
//            return response.json()
//         })
//         .then(function (number) {
//             document.querySelector("#number").innerText = number.value
//             document.querySelector("#base").innerText = number.base
//             document.querySelector("#bin").innerText = number.binary
//             document.querySelector("#dec").innerText = number.decimal
//             document.querySelector("#hex").innerText = number.hex
//         })
// })


document.querySelector("#conbin").addEventListener("click", function(event) {
    var num = document.querySelector("#num").value
    fetch("http://codyhess.com:9000/" + num + "/bin")
    .then(function(response) {
        return response.json()
    })
    .then(function(conversion) {
        document.querySelector("#number").innerText = num
        document.querySelector("#base").innerText = "Binary"
        
        document.querySelector("#bin").innerText = conversion.conversions.binary
        document.querySelector("#dec").innerText = conversion.conversions.decimal
        document.querySelector("#hex").innerText = conversion.conversions.hex
    })
})

document.querySelector("#condec").addEventListener("click", function(event) {
    var num = document.querySelector("#num").value
    fetch("http://codyhess.com:9000/" + num + "/dec")
    .then(function(response) {
        return response.json()
    })
    .then(function(conversion) {
        document.querySelector("#number").innerText = num
        document.querySelector("#base").innerText = "Decimal"

        document.querySelector("#bin").innerText = conversion.conversions.binary
        document.querySelector("#dec").innerText = conversion.conversions.decimal
        document.querySelector("#hex").innerText = conversion.conversions.hex
    })
})

document.querySelector("#conhex").addEventListener("click", function(event) {
    var num = document.querySelector("#num").value
    fetch("http://codyhess.com:9000/" + num + "/hex")
    .then(function(response) {
        return response.json()
    })
    .then(function(conversion) {
        document.querySelector("#number").innerText = num
        document.querySelector("#base").innerText = "Hexadecimal"

        document.querySelector("#bin").innerText = conversion.conversions.binary
        document.querySelector("#dec").innerText = conversion.conversions.decimal
        document.querySelector("#hex").innerText = conversion.conversions.hex
    })
})