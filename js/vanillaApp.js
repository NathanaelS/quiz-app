////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////			To do 			///////////////////////////////////////////////////////////////
// - Swap out all JQuery for vanilla JS
// - Create logic for grading the answers
// - Style in CSS
// - Add real questions and answers (5 total)
// - Look into creating a teacher version in order to create these quizzes
//		- Will most likely need an external database?

	counter = 0;

	// //This will get the users name and store it for the end of the quiz
	// var getUser = function () {
	// username = prompt('Enter a Name');
	// };

	// getUser();

	// while ( username === "" || username === null ) {
 //    getUser();
	// }

	window.onload = (function() {

	//This is the question database, where the question the student will be asked is stored
	var questionDatabase = [
		"question1",
		"question2",
		"question3"
		];
	
	//This prints the first value of the questionDatabase to the page
	document.getElementById('question').innerHTML = questionDatabase[counter];

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
	document.getElementById('ans1').querySelectorAll("label")[0].textContent = answerDatabase[0][counter];
    document.getElementById('ans1').querySelectorAll("input")[0].value = answerDatabase[0][counter];
		
	document.getElementById('ans2').querySelectorAll("label")[0].innerHTML = answerDatabase[1][counter];
    document.getElementById('ans2').querySelectorAll("input")[0].value = answerDatabase[1][counter];

	document.getElementById('ans3').querySelectorAll("label")[0].innerHTML = answerDatabase[2][counter];
    document.getElementById('ans3').querySelectorAll("input")[0].value = answerDatabase[2][counter];

	
	// //This starts a counter for the number of right answers
	var correct = 0;

	//This determines if the answer is correct
	var checkAnswer = function() {
			if ($("input:checked").val() === correctAnswers[counter]) {
			$( "#log" ).html( $( "input:checked" ).val() + " is correct!" );
			//if the answer is correct, this value increases
			correct++;
			//if the answer is wrong, this message is displayed
			} else {$("#log").html("Sorry, that is wrong")};
			//when the submit button is clicked, the radio buttons are disabled so no new answers can be chosen
			document.getElementsByClassName('answer')[0].disabled = true;
			document.getElementsByClassName('answer')[1].disabled = true;
			document.getElementsByClassName('answer')[2].disabled = true;
			document.getElementById('submit').disabled = true;
	};
	//Immediately calls the checkAnswer function
	// checkAnswer();

	document.getElementById('submit').onClick = checkAnswer;
	 
	 //This will display the number of correct answers at the end, and disable the next button and the radio buttons
	 //////////// I need to create logic for "Grading" these answers ////////////
	 var completion = function() {

	 		alert("Congratulations! You had " + correct + " correct!");
	 		$('input[name=answer]').attr('disabled', 'disabled');
	 		document.getElementById('next').disabled = true;
	 		document.getElementById('submit').disabled = true;
	 };
	
	var nextQuestion = function() { 

		//Increases the counter by one and displays the number in the console
		counter++;

	 	//Unchecks the radio button, enables it, and clears the text
	 	$('input[name=answer]').attr('checked',false);
	 	$('input[name=answer]').attr('disabled', false);
    	document.getElementById('log').innerHTML = ( '' );

    	//Reactivates the submit button
    	document.getElementById('submit').disabled = false;
		
		//Advances the questions and answers to the next values
	 	document.getElementById('question').innerHTML = questionDatabase[counter];
    	document.getElementById('ans1').querySelectorAll("label")[0].innerHTML = (answerDatabase[0][counter]);
    	document.getElementById('ans1').querySelectorAll("input")[0].value = (answerDatabase[0][counter]);
    	document.getElementById('ans2').querySelectorAll("label")[0].innerHTML = (answerDatabase[1][counter]);
    	document.getElementById('ans2').querySelectorAll("input")[0].value = (answerDatabase[1][counter]);
    	document.getElementById('ans3').querySelectorAll("label")[0].innerHTML = (answerDatabase[2][counter]);
    	document.getElementById('ans3').querySelectorAll("input")[0].value = (answerDatabase[2][counter]);

    	quiz();

		};

	//At the end, when the counter equals the answerDatabase array length, it will display the completion funciton
	var quiz = function() {
		if ( counter === answerDatabase.length) {
			completion();}
		};
 		
 	//Every time that the next button is clicked, this cycles through the array.
		// $('#next').click (nextQuestion);
		document.getElementById('next').onClick = nextQuestion();

});