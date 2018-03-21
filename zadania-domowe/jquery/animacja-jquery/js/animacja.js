//function zmianaKoloru = $('div').css({"background-color": "blue";});
var button = $("#animate");
$('button').click(function(){
$('div').animate({
        left: '200px',
        width: '100px',
        height: '100px'
    }, 3000);
$("div").fadeOut(3000).fadeIn(5000);
     
});


