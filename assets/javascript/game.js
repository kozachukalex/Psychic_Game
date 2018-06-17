var wins = 0;
var losses = 0;
var x = 10;
//set = x, this allows me to change guesses allowed easily and it work throughout code
var guessesRemaining = x;
var guessedSoFar = ""

var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var c = Math.floor(Math.random() * 25);
var compSelect = compChoice[c];

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (compChoice.indexOf(userGuess) !== -1) {
        if (userGuess === compSelect) {
            wins++;
            alert("You were correct! The letter was " + compSelect);
            guessedSoFar = "";
            guessesRemaining = x;
        }
        else {
            guessesRemaining--;
            guessedSoFar = userGuess + " " + guessedSoFar;

        }
        if (guessesRemaining === 0) {
            losses++;    
            alert("Ouch! Out of guesses!");
            guessedSoFar = "";
            guessesRemaining = x;
        }


    };
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("guessesRemaining").innerText = guessesRemaining;
    document.getElementById("guessedSoFar").innerText = guessedSoFar;

};