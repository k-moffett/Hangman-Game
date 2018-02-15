var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        start: function reset_word() {
            document.getElementById("word-blanks").innerHTML= this.current_word.split("").join(" ")
            this.guesses_left = document.getElementById("guesses-left").innerHTML= "9";
            this.guesses_left = document.getElementById("wrong-guesses").innerHTML= "0";
        }         
    }


function main_loop(params) {
    var valid_input = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   


}









function start_game(params) {
    game.start()
}

document.addEventListener("keyup", function (event) {
    console.log(event)
    event.key
    main_loop()
    });