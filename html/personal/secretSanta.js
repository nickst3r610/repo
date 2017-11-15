var names = ["Aiden Shih", "Alaa Al Sudani", "Alejandro Franco", "Carlo Valenti",
    "Carolina Restrepo", "David Shin", "Dorian Guzman", "Eddie Harmon", "Eion Contaste",
    "Elon Jefferson", "Eric Liu", "Gerson Castillo", "Gregory Davis", "Helen Cho",
    "Jamal Farah", "Janhairis Fermin", "Jerell Davis", "Joyce Ajagbe", "Kelvin Rodriguez",
    "Luiza Maciejak", "Michelle Shang", "Monique Mojica", "Newton Brooks Jr", "Nicholas Chavez",
    "Nicholas Pierre", "Princess Guerrero", "Romie Zelaya", "Ruben Profit", "Ryan Omoruyi",
    "Sergio Toxqui", "Shaedon Blackman", "Simon Gaviria", "Umedjon Ibrohimov",
    "Xavier Munroe", "Xsumi Oliver"]


var number = Math.floor(Math.random() * names.length);
console.log(names[number])


//*This function is used for picking names out of a 'hat'*//
let pickName = () => {

    let name =  prompt(`Enter Your Full Name.`)

    let id = document.querySelector(quadrant)

    if (id) {
        let color = prompt("Now Choose any color you'll like")
        id.style.backgroundColor = color
    } else {
        alert("Does Not Exist Please Try Agin")
        colorQuads()
    }

    var replay = setTimeout(function () {
        let option = prompt("Would you like to add another color to a quadrant? Yes Or No")
        if (option.toLowerCase() === "yes") {
            colorQuads()
        } else {
            clearTimeout(replay)
        }
    }, 1000);
}
colorQuads()

