$(document).ready( function() {

  $("#count-sum").click(function() {
    var sum = 0;
 
    $(".salary").each(function() {
    console.log($(this).text());
sum += parseInt($( this ).text());
});
console.log(sum); 
$( "#sum" ).html(sum);
});
});


