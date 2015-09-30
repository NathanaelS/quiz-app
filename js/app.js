$(document).ready(function() {

	//This starts the counter for our click through function
	//An option to do here is set it to -1, so the user must click next in order to see the first question upon loading
	var counter = 0;
	

	//This is the question database, where the question the student will be asked is stored
	var questionDatabase = [
		"question1",
		"question2",
		"question3"
		];
	
	//This prints the first value of the questionDatabase to the page
	//I am unable to get it to print automatically inside of the click function, so first the data is stored in the database
	//	and then the first value is displayed
	document.getElementById('question').innerHTML = questionDatabase[counter];


	//See questionDatabase
	var answerDatabase0 = [
		"answer1",
		"answer2",
		"answer3"
		];

	document.getElementById('a0').innerHTML = answerDatabase0[counter];

	var answerDatabase1 = [
		"a1",
		"answer2",
		"answer3"
		];

	document.getElementById('a1').innerHTML = answerDatabase1[counter];

	var answerDatabase2 = [
		"ans1",
		"answer2",
		"answer3"
		];

	document.getElementById('a2').innerHTML = answerDatabase2[counter];

	 //Every time that the next button is clicked, this cycles through the array.
	 //Need to find a way to make this stop after it reaches the length of the array it is cycling through, 
	 	//I tried a for loop and screwed up somehwere
	 $('#next').click(function () {
	 	counter++;

    	console.log(counter);
    	$('#element1').find("label").text(answerDatabase0[counter]);
    	$('#element1').find("input").prop("value", answerDatabase0[counter]);
    	document.getElementById('question').innerHTML = questionDatabase[counter];
    	// document.getElementById('a0').innerHTML = answerDatabase0[counter];
    	document.getElementById('a1').innerHTML = answerDatabase1[counter];
    	document.getElementById('a2').innerHTML = answerDatabase2[counter];
		});

	//This displays to the user the answer that they checked 
	 $( "input" ).on( "click", function() {
  		$( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
		});


});