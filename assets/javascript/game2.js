var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start: function reset_word() {
            document.getElementById("word-blanks").innerHTML= this.current_word.split("").join(" ")
            document.getElementById("guesses-left").innerHTML= "9";
          
        }         
    }


function validate_input(params) {
    var valid_input = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var user_input = event.key  
        for (var i = 0; i <valid_input.length; i++){
            if (valid_input[i] == user_input)
            console.log(user_input)
            wrong_guess(user_input)
        }
}

function wrong_guess(params) {

}



function add(params) {return x + 1}
function subtract(params) {return x - 1}







function start_game(params) {
    game.start()
}

document.addEventListener("keyup", function (event) {
    console.log(event)
    event.key
    validate_input()
    });