var wins = 0;
var losses = 0;
var x = 10;
//made variable x, this allows me to change guesses allowed easily and it work throughout code
var guessesRemaining = x;
var guessedSoFar = ""

var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function clear(compSelect) { //allows function to be called to reset after a win/loss and reset guesses, generate new letter
    var c = Math.floor(Math.random() * 25);
    var compSelect = compChoice[c];
    guessedSoFar = "";
    guessesRemaining = x;
    console.log(c);
    console.log(compSelect);
    return compSelect; // spits back letter chosen to outside of function
};

var compSelect = clear(compSelect) //issue with this variable being always the first when page loads. Working on fixing

document.onkeyup = function (event) {
    var userGuess = event.key;

    //used this area to check if userGuess has already been tried to prevent duplicating
    var isDuplicate = false; //originally makes the duplicate false, so that it must be changed to true
    for (var i = 0; i < guessedSoFar.length; i++) {
        if (userGuess == guessedSoFar[i]) {
            isDuplicate = true; //if userGuess is in array of guessedSoFar it turns true, alerts, and stops 
            alert("You already tried that letter!");
        }
    };
    if (!isDuplicate) { //verifies that isDuplicate is still false. Without this, counters still move
        if (compChoice.indexOf(userGuess) !== -1) { //verifies user selects a possible option
            if (userGuess === compSelect) { //if user guesses correct letter
                wins++;
                alert("You were correct! The letter was " + compSelect);
                clear();
            }
            else { //if user does not select correct letter
                guessesRemaining--;
                guessedSoFar = userGuess + " " + guessedSoFar;

            }
            if (guessesRemaining === 0) { //if user runs out of guesses
                losses++;
                alert("Ouch! Out of guesses!");
                clear();
            };

        };
    };
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("guessesRemaining").innerText = guessesRemaining;
    document.getElementById("guessedSoFar").innerText = guessedSoFar;

};