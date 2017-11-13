document.querySelector("#search").addEventListener("click", function () {
    var pokemonName = document.querySelector("#name").value
    fetch("http://pokeapi.co/api/v2/pokemon/" + pokemonName, {
        mode: "no-cors"
    })
        .then(function (response) {
           return response.json()
        })
        .then(function (pokemon) {
            document.querySelector("#weight").innerText = pokemon.weight
            document.querySelector("#height").innerText = pokemon.height
        })
})