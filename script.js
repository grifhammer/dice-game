function throwDice(){
	var randomDie1 = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	var randomDie2 = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	document.images["myDie1"].src = "d" + randomDie1 +".gif"
	document.images["myDie2"].src = "d" + randomDie2 +".gif"	
	console.log(randomDie1)
}
function throwDie(){
	var randomDie = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	document.images["myDie"].src = "d" + randomDie +".gif"
	console.log(randomDie)
}

function attackDragon(assistVal){
	var randomDie1 = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	var randomDie2 = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	document.images["myDie1"].src = "d" + randomDie1 +".gif";
	document.images["myDie2"].src = "d" + randomDie2 +".gif";

	//Print out the total roll as a number (innerHTML)
	// Check and see if the number (total) is > 9
		// If so, put the message in the #message div,
		// If not, put a different message in
	// Add a button... "Run Away"
	// if clicked on add a message to #message


	var totalRoll = randomDie1 + randomDie2;
	var totalAttack = totalRoll + assistVal;
	var newMessage = "";

	document.getElementById("your-roll").innerHTML = "You rolled: " + totalRoll + ". Total attack was: " + totalAttack;

	if(totalAttack > 9){
		newMessage = "You killed the dragon!";
		displayMessage(newMessage);
	}else{
		newMessage = "You were burninated by the dragon!";
		displayMessage(newMessage);
	}

}

function runAway(){
	
	document.getElementById("your-roll").innerHTML = "";
	
	displayMessage("You tried to run away but were burninated!");

}

function displayMessage(message){
	var messageBox = document.getElementById("message");

	messageBox.innerHTML = message;
}