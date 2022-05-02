//Clicking fact button
$("#factButton").on("click", function() {
	//generates random number 0-4
	var number = Math.floor((Math.random() * booFacts.length));
	//and displays the corresponding fact
	$("#factText").text(booFacts[number])
})

//Array of Boo facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

//When pink button is pressed
$("#textPink").on("click", function() {
	//change text to pink
	$("#funText").css("color", "pink")
})

//When orange button is pressed
$("#textOrange").on("click", function() {
	//Change text to orange
	$("#funText").css("color", "orange")
})

//When Green button is pressed
$("#textGreen").on("click", function() {
	//Change text to green
	$("#funText").css("color", "green")
})

//When grow button is pressed
$("#boxGrow").on("click", function() {
	//increase the size of the box
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//When shrink button is pressed
$("#boxShrink").on("click", function() {
	//Shrink box
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})