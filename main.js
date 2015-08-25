var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", 
"md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", 
"sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];

var submit = document.querySelector("#input1");  //    
var reset = document.querySelector("reset");
var scoreCounter = 0

//var scoreCounter = 



function compareInputToArray() {   // compare 2-letter state abbreviation to array
	

	var testState = $("#input1").val() ; // grab input from text field in the HTML and store it in variable testState
	var i = states.indexOf(testState); // look for a match between testState and our array of known states. indexOf returns the index position within the array if it finds a match. It returns -1 if no match 

	if (i != -1) { // if match is found 
		console.log("You guessed " + $("#input1").val() + " correctly!"); // logs user input
		console.log("You guessed " + states[i] + " correctly!"); // logs the matched item in array
		states.splice(i,1); // pulls matched item from the array
		scoreCounter ++;
		console.log( scoreCounter + " guessed correctly " + states.length + " to go!"); //this does a count on remaining items in the array
		

	}

	

};




// function score() {
//	if (states.splice(i,1)) = scoreCounter++ 
// 	
// }



// function reset () {
// 	if reset clicked, clear counter and clear map
// };


