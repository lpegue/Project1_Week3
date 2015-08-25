var states = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", "md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", "sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy"];

var submit = document.querySelector("#input1");

//var scoreCounter = 



function compareInputToArray() {   // compare 2-letter state abbreviation to array
	for (var i = 0; i < states.length; i++) {
		if ($("#input1").val() === states[i]) {
			alert("You guessed " + states[i] + " correctly!");
			states.splice(i,1);
			console.log(states.length + " to go!");
			break;
		}	
		else {

			alert("Try Again!");
			break;
		}
	};
};
// function score() {
// 	scoreCounter++
// }