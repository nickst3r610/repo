const firstUppercase = string =>
    string
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ")

console.log(firstUppercase("the cat goes meow softly"))