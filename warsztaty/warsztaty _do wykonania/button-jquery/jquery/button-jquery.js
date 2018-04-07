function pobierzDane(event){
    event.preventDefault();
    
    $.getJSON( "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(dane){
        
        $('body').append('<p>user Id: ' + dane.userId + "</p>");
        $('body').append('<p>user Name: ' + dane.userName + "</p>");
        $('body').append('<p>user Url: ' + dane.userURL + "</p>");
        $('body').append('<p>-------------------------</p>');
    });
}
