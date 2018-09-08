        $(document).ready(function loop() {
            
            $('#psychic').fadeIn(1500).delay(3500).fadeOut(1500);
            $('#psychic').delay(5000).fadeIn(1500);
            setTimeout(function(){loop()}, 16000);
        });
        
        
        console.log("testcode") 
        
        
         var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];

         var wins = 0;
         var losses = 0;
         var guesses = 3;
         var yourGuesses = [];
         
     
     
         var directionsText = document.getElementById("directions-text");
         var userChoiceText = document.getElementById("userchoice-text");
        //var computerChoiceText = document.getElementById("computerchoice-text");
         var winsText = document.getElementById("wins-text");
         var lossesText = document.getElementById("losses-text");
         var guessesText = document.getElementById("guesses-text");
         var yourGuessesText = document.getElementById("yourGuesses-text");
 
         var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         console.log(computerGuess, 'computerGuess')
 
         //make a loop for if answers match how to reset the game
 
         //how to make the guesses appear 
 
         //
         
         document.onkeyup = function(event) {
             var userGuess = event.key;
             yourGuesses.push(userGuess);
             console.log (yourGuesses)
         
             
             if (userGuess === computerGuess) {
                wins++;
                guesses = 3;
                yourGuesses = [];
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log(computerGuess)
 
                alert ("You ARE Psychic! ")
         
             }
             
            else if (userGuess !== computerGuess) {
                guesses--;
                alert ("Concentrate... " )
             
                if (guesses === 0) {
                    yourGuesses = [];
                    guesses = 3;
                    losses++;
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    console.log(computerGuess)
                    alert ("Clear your mind and try again, my friend")
                }
             }
 
             directionsText.textContent = "";
 
             userChoiceText.textContent = "Your letter was: " + userGuess;
             //computerChoiceText.textContent = "My letter was: " + computerGuess;
             winsText.textContent = "Wins: " + wins;
             lossesText.textContent = "Losses: " + losses;
             guessesText.textContent = "Guesses Left: " + guesses;
             yourGuessesText.textContent = "Your Guesses So Far: " + yourGuesses;
 
         } //end of onkey up