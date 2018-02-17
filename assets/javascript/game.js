var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        valid_input : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start : function reset_word() {
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
    incorrect_guess(user_input)
}
function incorrect_guess(user_input) {
        for (var i = 0; i <game.current_word.split("").length; i++){
            if (game.current_word.split("")[i] == user_input){
                correct_guess(user_input)
//            }else{ return not_good() 
}}}
function correct_guess(user_input) {
var index = game.current_word.indexOf(user_input)
var current_word = document.getElementById("word-blanks").innerHTML
var split_word = current_word.split(" ")
var new_word = split_word.splice(index, 1, user_input)
document.getElementById("word-blanks").innerHTML= split_word.join(" ")
fill_blanks()
}
function fill_blanks() {
var word = document.getElementById("word-blanks").innerHTML
var your_word = word.split(" ")
var correct_word = game.current_word.split("")
win(your_word, correct_word)            
}
function win(your_word, correct_word){
var your_final_word = your_word.join(" ")
var correct_final_word = correct_word.join(" ")
console.log(your_final_word)
console.log(correct_final_word)
if (your_final_word === correct_final_word) {
    add_wins()
}}
function add_wins (){
var number = 0
var point = 1
var score = number + point 
document.getElementById("win-counter").innerHTML= score
console.log(score)
start_game()
}
//function not_good() {
 //   var number = document.getElementById("guesses-left").innerHTML
  //  var wrong_guesses = document.getElementById("wrong-guesses").innerHTML
  //  var point = 1
 //   var guesses = number - point
  //  var false_guesses = wrong_guesses + point
  //  document.getElementById("guesses-left").innerHTML= guesses
  //  document.getElementById("wrong-guesses").innerHTML= false_guesses
  //  lose(guesses)
//    } 
//function lose(guesses) {
//console.log(guesses)
//if (guesses <= 0) {
//var number = 0
//var point = 1
//var score = number - point 
//document.getElementById("loss-counter").innerHTML= score
//start_game()
//}}  
   







function start_game(params) {
    game.start()
}
document.addEventListener("keyup", function (event) {
    event.key
    validate_input()
    });