var word_list = ["goldfish", "frog", "snake", "cat"]
var game = {
        current_word : word_list[Math.floor(Math.random() * word_list.length)],
        wrong_guesses : 0,
        guesses_left : 9,
        wins : 0,
        losses : 0,
        start: function reset_word() {
            document.getElementById("word-blanks").innerHTML= this.current_word.split("")}
    }












function start_game(params) {
    game.start()
}

document.addEventListener("keyup", function (event) {
    console.log(event)
    event.key
    });