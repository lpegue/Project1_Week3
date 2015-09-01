READ Me

This is an educational, 2-player game that requires the players to name as many states (using the state's 2-letter abbreviation) as possible within 60 seconds.   The home page will have an outline of the U.S. without the states' outlines.  As a player types in the 2-letter abbreviation for a state, the state will appear on the map.  

This is a game for all ages.  Because the map will start without the state boundaries, it will be more difficult.

There will be a map of U.S. with only the outside boundaries.  Under the map will be an input box to type the state's 2 initial abbreviation.  The page will display a timer and a score.

I started by creating an array of the 50 states using each state's 2-letter abbreviation.  Then, there is a function that compares what the player enters with what is in the array.  If the player types in a state twice or types in an incorrect abbreviation, an alert pops up to "Try again".  If there is a match, the player's score increases by 1.

function compareInputToArray(){   // compare 2-letter state abbreviation to array 

	console.log("compare input to array is running")
	var testState = $("#input1").val().toLowerCase() ; // grab input from text field in the HTML and store it in variable testState. Will put in downcase and then compare.
	var i = states.indexOf(testState); // look for a match between testState and our array of known states. indexOf returns the index position within the array if it finds a match. It returns -1 if no match 

	if (i != -1) { // if match is found
		setImageVisible(testState, true); 
		console.log("You guessed " + testState + " correctly!"); // logs user input
		console.log("You guessed " + states[i] + " correctly!"); // logs the matched item in array
		states.splice(i,1); // pulls matched item from the array
		if ( currentPlayer === "player1") {
			scoreCounter1++;
			$("#score1")[0].innerText=scoreCounter1;
		}
		else if ( currentPlayer === "player2") {
			console.log("this is player 2")
			scoreCounter2++;
			$("#score2")[0].innerText=scoreCounter2;
		}
		console.log( scoreCounter1 + " guessed correctly " + states.length + " to go!"); //this does a count on remaining items in the array
	
	}
	else {
		alert("Try Again!") //alert shows when an incorrect abbreviation is entered
	}
	
	$("#input1").val("");
	$("#input1").closest("form").find("input[type=text],textarea").val("");
}

In writing this initial function, I did not properly plan to account for 2 players.  By the end of project week I was not able to correct this flaw.

The "start" function is linked to the "Start Game you have 60 seconds" buttong.  It begins the 60 second timer and calls the compareInputToArray function.  I had initially planned to have an on-screen timer which I think would make the game more fun.  I was unable to include the timer and that is on my "to do list".

function start() {
	console.log("start");
    gameTimer = setTimeout(turnEnd, 60000);
    $("#enter").on("submit", compareInputToArray)
}	

The "turnEnd" function simply alerts the player when their 60 seconds has run.

function turnEnd() {
    alert("Your Turn is Over!");
    clearTimeout(gameTimer);
}

The "setImageVisible" function turns the element property for each state from hidden to visible when a player correctly enters its 2-letter abbreviation.

function setImageVisible(id, visible) {  
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

The "switchPlayer" function is partially inoperable.  It is linked to the "Switch Players" button.  Although it correctly clears the board of any states guessed, logs the score and put the state on the map, it is pulling from the same array as Player 1 which means that, for example, if Player 1 guessed "CA", Player 2 can't access "CA".    

function switchPlayer(){  // changes the states from visible to hidden and starts scoring for payer # 2
	for (var i = 0; i < allStates.length; i++) {
		allStates[i].style.visibility="hidden"}
		currentPlayer = "player2"
		console.log(currentPlayer)

var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", 
"md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", 
"sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];
}

Finally, the "resetAll" function is linked to the "Reset Board and Scores" button.  It clears the board and the scores.

function resetAll(){  // changes the visibility property of the states from visible to hidden & clears the scores
	for (var i = 0; i < allStates.length; i++) {
		allStates[i].style.visibility="hidden";
		$("#score1").html("");
		$("#score2").html("");
		$("#input1").closest("form").find("input[type=text],textarea").val("");
		console.log("we got here")
	}
var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", 
"md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", 
"sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];
}


Next steps:
1.  Make it a working 2 player game.
2.  Include an on-screen timer.
3.  Make the game more visually appealing.