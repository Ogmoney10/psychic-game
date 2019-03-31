var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var YourGuesses = 9;
		 var guess = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
//.indexOf lets me find the user guess ine the array
			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					YourGuesses = 9;
					guess= [];
				}

				if (userGuess != computerGuess) {
					YourGuesses --;
					guess.push(userGuess);
				}

				if (YourGuesses === 0) {

				YourGuesses = 9;
				losses ++;
				guess = [];

				
			}

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + YourGuesses + "</p>" +
			"<p>Your Guesses so far: " + guess.join(", ") + "</p>";
            // .join elelment in a array in to a sting together
            // querySelector helps me refer to my html document
			document.querySelector("#game").innerHTML = html;

			
			}
		};