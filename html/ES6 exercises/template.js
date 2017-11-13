function makeStory (string) {
    if (typeof string !== "string") {
        return `Not a string.`
    } else {
        return `"Remember, go straight to Grandma's house,
        "${string}'s mother cautioned.  
        "Don't dawdle along the way and please don't talk to strangers! 
        The woods are dangerous."
        "Don't worry, mommy," said ${string}, "I'll be careful.`
    }
}

console.log(makeStory("Xavier"))