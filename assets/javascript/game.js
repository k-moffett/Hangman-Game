



//Selects a random item from the array
word_list = ["goldfish", "frog", "snake", "cat"]
console.log(word_list)
var current_word = word_list[Math.floor(Math.random() * word_list.length)]
console.log(current_word)
//Turns current_word into new string
var current_array = current_word.split("")
console.log(current_array)


//Generates an array of the user's guesses
document.onkeyup = function (event) {
    var user_guess = []
    var user_input = event.key
    user_guess.push(user_input);
    console.log(user_guess)
}



  