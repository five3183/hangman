var words = [" zero", " one", " two", " three"]
var word = words[Math.floor(Math.random() * words.length)];
var PHarray = [];
var blankArray = [];
var answerArray = [];
var finalAnswer
var lettersUsed = [];
var lettersLeft = word.length + " LETTERS IN THIS WORD";

var losses = 0;
var wins = 0;
var chances = 7; 



document.getElementById("CHANCE").innerHTML = chances;
document.getElementById("WINS").innerHTML = wins;
document.getElementById("LOSSES").innerHTML = losses;
document.getElementById("NUMLETTERS").innerHTML = lettersLeft;

$("body").on("click", "#STARTGAME", function() {
    startGame()
});

//Generate Place Holder
function generatePH () {
    for(j = 0; j < word.length; j++) {
    PHarray[j] = "_";
    document.getElementById("WORD").innerHTML = PHarray;
    }
}

//Start Game Function
function startGame() {
    function freshStart(){
        chances = 7;
        document.getElementById("CHANCE").innerHTML = chances;
        
        lettersUsed.splice(0);
        document.getElementById("LETTERSUSED").innerHTML = lettersUsed;
        
        var word = words[Math.floor(Math.random() * words.length)];
        document.getElementById("NUMLETTERS").innerHTML = word.length + " LETTERS IN THIS WORD";

        generatePH ()
    }
    document.onkeyup = function (event) {
        var guess = event.key;
    // Check User guess (right)
        if (finalAnswer === word) {
            wins += 1;
            document.getElementById("WINS").innerHTML = wins;
            alert("You Win!  The word was " + word);
            startGame();
        }
        else if(word.indexOf(guess)) {
                PHarray.push(guess);
                answerArray = PHarray.join("");
                var finalAnswer = answerArray.trim("");
                document.getElementById("WORD").innerHTML = PHarray;
        }
            // Log wrong guess 
        else {
            lettersUsed.push(guess);
            document.getElementById("LETTERSUSED").innerHTML = lettersUsed;
            chances -= 1;
            document.getElementById("CHANCE").innerHTML = chances;
                //Check if user has chances for loss condtion 
            if (chances < 0) {
                alert("You Lose! The word was " + word);
                losses += 1;
                document.getElementById("LOSSES").innerHTML = losses;
                startGame();
                    
            }

        }
    }
}