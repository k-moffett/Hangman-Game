



//Selects a random item from the array
word_list = ["goldfish", "frog", "snake", "cat"]
console.log(word_list)
var current_word = word_list[Math.floor(Math.random() * word_list.length)]
console.log(current_word)
//Turns current_word into new string
var current_array = current_word.split("")
console.log(current_array)


//Generates the user's guess
document.onkeyup = function guess() {
    var array = []
    var item = event.key
    array.push(item);
    console.log(array)
}

