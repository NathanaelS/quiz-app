	counter = 0;

	$(document).ready(function() {

	//This starts the counter for our click through function
	//An option to do here is set it to -1, so the user must click next in order to see the first question upon loading



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

	 
	 //I am trying to make a function so when we hit the end of the array, the radio buttons and next button are disabled and it displays the number of correct answers
	 var completion = function() {
	 	// if (counter = answerDatabase.length) {
	 		$('#log').html("Congratulations! You had " + correct + " correct!");
	 		$('input[name=answer]').attr('disabled', 'disabled');
	 		$('#next').attr('disabled', true);
	 	// };
	 };

	 //Every time that the next button is clicked, this cycles through the array.
	var nextQuestion = function() { 

		// $('#next').click(function () {


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
	var number = 10;

	//This is the actual quiz, if the counter is less than the length of the answers array, it advances, if not, it completes
	var quiz = function() {
		if ( counter === answerDatabase.length) {
			console.log("This is getting ridiculous");
			completion();}
		};
	//I call this immediately	
		$('#next').click (nextQuestion);

});