function pobierzDane(event){
    event.preventDefault();
    
    $.getJSON( "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(dane){
        $('body').append('<p> Imie: ' + dane.imie + "</p>");
        $('body').append('<p> Nazwisko: ' + dane.nazwisko + "</p>");
        $('body').append('<p> Zawod: ' + dane.zawod + "</p>");
        $('body').append('<p> Firma: ' + dane.firma + "</p>");
    });
}
