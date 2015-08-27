var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", 
"md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", 
"sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];

var scoreCounter = 0
var allStates = document.querySelectorAll(".state")
var playerTurn = 1


function compareInputToArray(){   // compare 2-letter state abbreviation to array

	var testState = $("#input1").val().toLowerCase() ; // grab input from text field in the HTML and store it in variable testState. Will put in downcase and then compare.
	var i = states.indexOf(testState); // look for a match between testState and our array of known states. indexOf returns the index position within the array if it finds a match. It returns -1 if no match 

	if (i != -1) { // if match is found
		setImageVisible(testState, true); 
		console.log("You guessed " + testState + " correctly!"); // logs user input
		console.log("You guessed " + states[i] + " correctly!"); // logs the matched item in array
		states.splice(i,1); // pulls matched item from the array
		scoreCounter++;
		console.log( scoreCounter + " guessed correctly " + states.length + " to go!"); //this does a count on remaining items in the array

	}

	$("#score1")[0].innerText=scoreCounter;
	$("#input1").val("");

}

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

function reset(){
	for (var i = 0; i < allStates.length; i++) {
		allStates[i].style.visibility="hidden"
}
}

 
function resetAll(){
		for (var i = 0; i < allStates.length; i++) {
			allStates[i].style.visibility="hidden";
			$("#score1").val("");
			$("#score2").val("");
			console.log("we got here")
}
}

function displayTurn(x){
	if (x % 2 === 0) {
		alert("You are Player 1")
	}
	else {
		alert("You are Player 2")
	}
}






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













