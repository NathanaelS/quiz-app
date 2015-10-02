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
	$('#question').text(questionDatabase[counter]);


	//See questionDatabase
	var answerDatabase0 = [
		"answer1",
		"giggety",
		"giggety goo"
		];

	$('#ans1').find("label").text(answerDatabase0[counter]);
    $('#ans1').find("input").prop("value", answerDatabase0[counter]);

	var answerDatabase1 = [
		"a1",
		"answer2",
		"answer3"
		];

	$('#ans2').find("label").text(answerDatabase1[counter]);
    $('#ans2').find("input").prop("value", answerDatabase1[counter]);

	var answerDatabase2 = [
		"ans1",
		"answer2",
		"answer3"
		];

	$('#ans3').find("label").text(answerDatabase2[counter]);
    $('#ans3').find("input").prop("value", answerDatabase2[counter]);

	 //Every time that the next button is clicked, this cycles through the array.
	$('#next').click(function () {
		counter++;
	 	console.log(counter);

	 	$('#question').text(questionDatabase[counter]);
    	$('#ans1').find("label").text(answerDatabase0[counter]);
    	$('#ans1').find("input").prop("value", answerDatabase0[counter]);
    	$('#ans2').find("label").text(answerDatabase1[counter]);
    	$('#ans2').find("input").prop("value", answerDatabase1[counter]);
    	$('#ans3').find("label").text(answerDatabase2[counter]);
    	$('#ans3').find("input").prop("value", answerDatabase2[counter]);
    	$('input[name=answer]').attr('checked',false);
    	// $('input[name=answer]').attr('value', "" );
		});

	//This displays to the user the answer that they checked 
	 $( "input" ).on( "click", function() {
  		$( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
		});


});