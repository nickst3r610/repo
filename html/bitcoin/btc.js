document.addEventListener("DOMContentLoaded", function () {
    Array.from(document.querySelectorAll(".convert")).map(function (element) {
        element.addEventListener("click", function (event) {
            var req = new XMLHttpRequest()
            req.addEventListener("load", function () {
                var currentPrice = JSON.parse(this.responseText)
                var usdRate = currentPrice.bpi.USD.rate_float
                var valueEntered = Number(document.querySelector("#num").value)
                var result
                if (event.target.id === "usd2btc") {
                    result = "Value of " + valueEntered + " USD is " + (valueEntered / usdRate) + " BTC"
                } else {
                    result = "Value of " + valueEntered + " BTC is " + (valueEntered * usdRate) + " USD"
                }
                var p = document.createElement("p")
                p.innerText = result
                p.classList.add("history")
                document.querySelector("body").insertBefore(p, document.querySelector(".history"))
                document.querySelector("#num").value = ""
            })
            req.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
            req.send()
        })
    })
})