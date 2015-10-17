//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////			To do 			/////////////////////////////////////////////////////////////////////
// - Fix the bug in the username logic
// - Create logic for grading the answers
// - Style in CSS
// - Add real questions and answers (5 total)
// - Look into creating a teacher version in order to create these quizzes
//		- Will most likely need an external database?

	counter = 0;

	//This will get the users name and store it for the end of the quiz
	var username = "";

	var user = function () {
		username = prompt('Answer Me!');
	};
	
	user();

	do {
	user();
	} while (username === "" || username === null)

	$(document).ready(function() {

	//This is the question database, where the question the student will be asked is stored
	var questionDatabase = [
		"question1",
		"question2",
		"question3"
		];
	
	//This prints the first value of the questionDatabase to the page
	$('#question').text(questionDatabase[counter]);

	//These are the answer variables
	var $ans1 = $('#ans1'), $ans2 = $('#ans2'), $ans3 = $('#ans3');

	//See questionDatabase
	var answerDatabase = [
		//button 1 answers
		["answer1",
		"giggety",
		"giggety goo"
		],
		//button 2 answers	
		[
		"a1",
		"answer2",
		"answer3"
		],
		//button 3 answers
		[
		"ans1",
		"answer2",
		"answer3"
		],

		];

	var correctAnswers = [

		"answer1",
		"giggety",
		"giggety goo"
	];

		//Like the question part, this will input the first values onto the page
	$ans1.find("label").text(answerDatabase[0][counter]);
    $ans1.find("input").prop("value", answerDatabase[0][counter]);
		
	$ans2.find("label").text(answerDatabase[1][counter]);
    $ans2.find("input").prop("value", answerDatabase[1][counter]);

	$ans3.find("label").text(answerDatabase[2][counter]);
    $ans3.find("input").prop("value", answerDatabase[2][counter]);

	
	// //This starts a counter for the number of right answers
	var correct = 0;

	//This determines if the answer is correct
	var checkAnswer = function() {
		$( "#submit" ).on( "click", function() {
			if ($("input:checked").val() === correctAnswers[counter]) {
			$( "#log" ).html( $( "input:checked" ).val() + " is correct!" );
			//if the answer is correct, this value increases
			correct++;
			//if the answer is wrong, this message is displayed
			} else {$("#log").html("Sorry, that is wrong")};
			//when the submit button is clicked, the radio buttons are disabled so no new answers can be chosen
			$('input[name=answer]').attr('disabled', true);
	})
	};
	//Immediately calls the checkAnswer function
	checkAnswer();

	 
	 //This will display the number of correct answers at the end, and disable the next button and the radio buttons
	 //////////// I need to create logic for "Grading" these answers ////////////
	 var completion = function() {
	 	// if (counter = answerDatabase.length) {
	 		$('#log').html("Congratulations, " + username +"! You had " + correct + " correct!");
	 		$('input[name=answer]').attr('disabled', 'disabled');
	 		$('#next').attr('disabled', true);
	 };
	
	var nextQuestion = function() { 

		//Increases the counter by one and displays the number in the console
		counter++;
		$('input[name=answer]').attr('disabled', false);
	 	// console.log(counter);


	 	//Unchecks the radio button and clears the text
	 	$('input[name=answer]').attr('checked',false);
    	$('#log').text( '' );
		
		//Advances the questions and answers to the next values
	 	$('#question').text(questionDatabase[counter]);
    	$ans1.find("label").text(answerDatabase[0][counter]);
    	$ans1.find("input").prop("value", answerDatabase[0][counter]);
    	$ans2.find("label").text(answerDatabase[1][counter]);
    	$ans2.find("input").prop("value", answerDatabase[1][counter]);
    	$ans3.find("label").text(answerDatabase[2][counter]);
    	$ans3.find("input").prop("value", answerDatabase[2][counter]);

    	quiz();

		};

	//At the end, when the counter equals the answerDatabase array length, it will display the completion funciton
	var quiz = function() {
		if ( counter === answerDatabase.length) {
			completion();}
		};
 		
 	//Every time that the next button is clicked, this cycles through the array.
		$('#next').click (nextQuestion);

});