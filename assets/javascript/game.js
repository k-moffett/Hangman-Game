//Set up game
    //Set word to guess***word-blanks***
    //Set wrong guesses***wrong-guesses***
    //Set guesses left****guesses-Left****
    //Set wins****winCounter***
    //Set losses***loss-counter***

//Create loop for game
    //Create storable user input
        //Compare user input for letters already chosen
            //If user input matches a letter already chosen
                //---Do nothing
        //Compare user input to letters in chosen word
            //If user input equals a character
                //---Replace a blank with the matching character
        //Compare user input to letters not in chosen word
            //If user input does not equal a character
                //---Add 1 to wrong guesses
                //---Remove 1 from guesses left
    
//End current game
    //If all letters have been guessed
        //---Add 1 to wins
        //---Restart game with a new word***Keep wrong guesses, wins, and losses
    //If guesses left equal 0
        //---Add 1 to losses
        //---Restart game with new word***Keep wrong guesses, wins, and losses


//Set word to guess
//Selects a random item from the array
word_list = ["goldfish", "frog", "snake", "cat"]
console.log(word_list)
var current_word = word_list[Math.floor(Math.random() * word_list.length)]
console.log(current_word)
//Turns current_word into new string
var current_array = current_word.split("")
console.log(current_array)

//Set wrong guesses
function set_wrong_guesses() {
    document.getElementById("#wrong-guesses").body.innerHTML="0"
}