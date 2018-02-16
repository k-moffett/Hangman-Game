var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        valid_input : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start: function reset_word() {
            document.getElementById("word-blanks").innerHTML= this.current_word.split("").fill("_").join(" ")
            document.getElementById("guesses-left").innerHTML= "9"; 
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
    console.log(remove_this)
    console.log(new_valid_letters)
}











function start_game(params) {
    game.start()
}
document.addEventListener("keyup", function (event) {
    event.key
    validate_input()
    });