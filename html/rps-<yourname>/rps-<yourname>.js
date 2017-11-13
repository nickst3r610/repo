document.querySelector("#rock").addEventListener("click", function (event) {
    if (document.querySelector("#name").value) {
        var name = document.querySelector("#name").value
        fetch("http://codyhess.com:9001" + "/rock/" + `${name}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                document.querySelector("#action").innerText = "rock"
                document.querySelector("#ai").innerText = result.ai
                document.querySelector("#outcome").innerText = result.result

                document.querySelector("#tWin").innerText = "Total Wins: " + result.stats.win
                document.querySelector("#tLose").innerText = "Total Losses: " + result.stats.lose
                document.querySelector("#tTie").innerText = "Total Ties: " + result.stats.tie
            })
    } else {
        fetch("http://codyhess.com:9001" + "/rock/")
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                document.querySelector("#action").innerText = "rock"
                document.querySelector("#ai").innerText = result.ai
                document.querySelector("#outcome").innerText = result.result

            })
    }
})

document.querySelector("#paper").addEventListener("click", function (event) {
    if (document.querySelector("#name").value) {
        var name = document.querySelector("#name").value
        fetch("http://codyhess.com:9001" + "/paper/" + `${name}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                document.querySelector("#action").innerText = "paper"
                document.querySelector("#ai").innerText = result.ai
                document.querySelector("#outcome").innerText = result.result

                document.querySelector("#tWin").innerText = "Total Wins: " + result.stats.win
                document.querySelector("#tLose").innerText = "Total Losses: " + result.stats.lose
                document.querySelector("#tTie").innerText = "Total Ties: " + result.stats.tie
            })
    } else {
        fetch("http://codyhess.com:9001" + "/paper/")
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                document.querySelector("#action").innerText = "paper"
                document.querySelector("#ai").innerText = result.ai
                document.querySelector("#outcome").innerText = result.result

            })
    }
})

document.querySelector("#scis").addEventListener("click", function (event) {
    if (document.querySelector("#name").value) {
        var name = document.querySelector("#name").value
        fetch("http://codyhess.com:9001" + "/scissors/" + `${name}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                document.querySelector("#action").innerText = "scissors"
                document.querySelector("#ai").innerText = result.ai
                document.querySelector("#outcome").innerText = result.result

                document.querySelector("#tWin").innerText = "Total Wins: " + result.stats.win
                document.querySelector("#tLose").innerText = "Total Losses: " + result.stats.lose
                document.querySelector("#tTie").innerText = "Total Ties: " + result.stats.tie
            })
    } else {
        fetch("http://codyhess.com:9001" + "/scissors/")
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                document.querySelector("#action").innerText = "scissors"
                document.querySelector("#ai").innerText = result.ai
                document.querySelector("#outcome").innerText = result.result

            })
    }
})