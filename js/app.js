$(document).ready(function() {

	$( "input" ).on( "click", function() {
		if ($('input:checked').val() === "banana") {
  		$( "#log" ).html( $( "input:checked" ).val() + " is correct!" );
		}else { $("#log").html( $("input:checked").val() + " is wrong!")}
		});
});