var user_guess;

//Selects a random item from the array
word_list = ["goldfish", "frog", "snake", "cat"]
var current_word = word_list[Math.floor(Math.random() * word_list.length)]
console.log(current_word)

//Changes the word_list string into a new array
var word_array = Array.from(current_word)
console.log(word_array)

//Generates the users choice
document.onkeyup = function(event) {
    user_guess = event.key
    console.log(user_guess)
};


if (user_guess === indexOf(word_array)) {
    alert("It's a match!")
}




