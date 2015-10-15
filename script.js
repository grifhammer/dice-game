function throwDice(){
	var randomDie1 = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	var randomDie2 = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	document.images["myDie1"].src = "d" + randomDie1 +".gif"
	document.images["myDie2"].src = "d" + randomDie2 +".gif"	
	console.log(randomDie1)
}
function throwDiee(){
	var randomDie = Math.round(Math.random() * 5) + 1; //Give us a random number between 1 and 6
	document.images["myDie1"].src = "d" + randomDie +".gif"
	console.log(randomDie)
}