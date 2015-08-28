var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", 
"md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", 
"sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];

var playerOneScoreCounter=0;
var allStates=document.querySelectorAll(".state");
var currentPlayer="player1";
var scoreCounter1 = 0;
var scoreCounter2 =0;

$("form").submit(function( event ) {
	event.preventDefault();
	return false;
});


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

function start() {
	console.log("start");
    gameTimer = setTimeout(turnEnd, 60000);
    $("#enter").on("submit", compareInputToArray)
}	

function turnEnd() {
    alert("Your Turn is Over!");
    clearTimeout(gameTimer);
}

function setImageVisible(id, visible) {  
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

function switchPlayer(){  // changes the states from visible to hidden and starts scoring for payer # 2
	for (var i = 0; i < allStates.length; i++) {
		allStates[i].style.visibility="hidden"}
		currentPlayer = "player2"
		console.log(currentPlayer)

var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", 
"md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", 
"sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];
}
	
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

$("#switchPlayer").on( "click", switchPlayer)
$("#resetAll").on("click", resetAll)
$("#start").on("click", start)









/*$("body").on( "click", "#switchPlayer, #resetAll, #start", function () {
	//window has access to all functions
	window[this.id]();
});*/


// 2. timer




// 4. submit guess with enter button instead of submit button
// var submit = document.querySelector("#input1");
// var $submit = $("#input1") // in JQuery


// 5.  keep track of 2 player scores 
// function score() {
//	if (states.splice(i,1)) = scoreCounter++ 
// 	
// }


// 6.  declare winner

// if ("score1".val > "score2".val) {
// 	return("Player 1 Won!!!")
// }
// if ("score2".val > "score1".val) {
// 	return("Player 2 Won!!!)
// }
// else {
// 	return("Tie!!!")
// }












