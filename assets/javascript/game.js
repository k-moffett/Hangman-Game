var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        valid_input : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start: function reset_word() {
            word_blanks = document.getElementById("word-blanks").innerHTML= this.current_word.split("").fill("_").join(" ")
            document.getElementById("wrong-guesses").innerHTML= "0";
            document.getElementById("guesses-left").innerHTML= "9";
            document.getElementById("win-counter").innerHTML= "0";
            document.getElementById("loss-counter").innerHTML= "0"; 
        }}
function validate_input(params) {
    var user_input = event.key  
        for (var i = 0; i <game.valid_input.length; i++){
            if (game.valid_input[i] == user_input){
                used_letters(game.valid_input, user_input)      
        }}}
function used_letters(valid_input, user_input) {
    var used_letter = (valid_input.indexOf(user_input))
    remove_used_letters(used_letter, user_input)
}
function remove_used_letters(used_letter, user_input) {
    var remove_this = used_letter
    var new_valid_letters = game.valid_input.splice(remove_this, 1)
    incorrect_guess(user_input)
}
function incorrect_guess(user_input) {
        for (var i = 0; i <game.current_word.split("").length; i++){
            if (game.current_word.split("")[i] == user_input){
                correct_guess(user_input) 
                }
}}




function not_good(user_input) {
    var wrong_number = document.getElementById("wrong-guesses").innerHTML
    var guesses_number = document.getElementById("guesses-left").innerHTML
}





function correct_guess(user_input) {
var index_of_user_input = game.current_word.indexOf(user_input)
var current_word = document.getElementById("word-blanks").innerHTML
var filter_current_word = current_word.trim()
var final_word = filter_current_word.split("").join("")
console.log(final_word)
final_word.replace(index_of_user_input, user_input)
document.getElementById("word-blanks").innerHTML= final_word

}
    


    
    







console.log(game.current_word)
function start_game(params) {
    game.start()
}
document.addEventListener("keyup", function (event) {
    event.key
    validate_input()
    });