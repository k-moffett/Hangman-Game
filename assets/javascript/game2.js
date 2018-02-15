var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start: function reset_word() {
            document.getElementById("word-blanks").innerHTML= this.current_word.split("").join(" ")
            this.guesses_left = document.getElementById("guesses-left").innerHTML= "9";
        }         
    }


function main_loop(params) {
    var valid_input = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var stored_input = []
   if (event.key != valid_input.indexOf(event.key)) {
       alert("invalid input")
   } else {
    
        
    }
   
}









function start_game(params) {
    game.start()
}

document.addEventListener("keyup", function (event) {
    console.log(event)
    event.key
    main_loop()
    });