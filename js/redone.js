$(document).ready(function() {

  // This starts the counter for our click through function
  // An option to do here is set it to -1, so the user must click next in order to see the first question upon loading
  var counter = -1;

  // This is the question database, where the question the student will be asked is stored
  
    var questionDatabase = [
      'question1',
        'question2',
        'question3'
    ];
    
    // This is the answer database, where the answer the student will be choosing is stored
  var answerDatabase = [
    [
          'answer1',
          'giggety',
          'giggety goo'
        ],
      
        [
          'a1',
      'answer2',
      'answer3'
        ],
      
        [
          'ans1',
      'answer2',
      'answer3'
        ],
  ];
  
    // The question element
    var $question = $('#question');
  
  // These are the answer elements
  var $ans1 = $('#ans1'), $ans2 = $('#ans2'), $ans3 = $('#ans3');
  
    // The next button
    var $nextBtn = $('#next');
  
    // The log message
    var $log = $('#log');
  
  // so same thing, just keep it consistent I guess, so increase at the end or beginning your choice? You already moved it to end it looks
  
  // yup go ahead copy paste or just mov

    function nextQuestion() {      
      $question.text(questionDatabase[counter]);

        $ans1.find('label')
            .text(answerDatabase[0][counter])
            .prev()
            .prop('value', answerDatabase[0][counter]);

        $ans2.find('label')
            .text(answerDatabase[1][counter])
            .prev()
            .prop("value", answerDatabase[1][counter]);

        $ans3.find('label')
            .text(answerDatabase[2][counter])
            .prev()
            .prop("value", answerDatabase[2][counter]);
      
        $('input[name=answer]').attr('checked', false);
      
        // what's missing is this:
        $log.text( '' ); // set the log's text to empty tada
      
        counter++;
        console.log(counter);
    }

    nextQuestion(); // Immediately call it
  
  // Every time that the next button is clicked, this cycles through the array.
  $nextBtn.click( nextQuestion );
  
  //This displays to the user the answer that they checked
  $( 'input' ).on( 'click', function() {
    $log.text( $( 'input:checked' ).val() + ' is checked!' );
  });
});