
//Selects a random item from the array
word_list = ["goldfish", "frog", "snake", "cat"]
console.log(word_list)
var current_word = word_list[Math.floor(Math.random() * word_list.length)]
console.log(current_word)




var user_guess = document.onkeyup = function(event) {
    var user_guess = event.key
console.log(user_guess)
};
