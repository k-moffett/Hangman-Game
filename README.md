# Hangman-Game
//Set up game
    //Set word to guess***word-blanks***
    //Set guesses left****guesses-Left****

    //Set wrong guesses***wrong-guesses***
    //Set wins****win-counter***
    //Set losses***loss-counter***
        //^---these three need to only reset when the page refreshes 
        
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