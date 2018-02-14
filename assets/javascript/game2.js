//Stuff that needs to be defined globally
var user_guess;
var current_word;
var word_list;
var letters_guessed;
var word_blanks;
var guesses_left;
var wong_guesses;
var win_counter;
var loss_counter;

guess(user_guess)
function guess(g) {
if (g = null) {
    null
} else {
    document.onkeyup = function (g) {
        g = event.key
        return g
        }
    }
}
console.log(user_guess)