function pobierzDane(event){
    event.preventDefault();
    
    $.getJSON( "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(dane){
        $('#dane-programisty').append('<p> Imie: ' + dane.imie + "</p>");
        $('#dane-programisty').append('<p> Nazwisko: ' + dane.nazwisko + "</p>");
        $('#dane-programisty').append('<p> Zawod: ' + dane.zawod + "</p>");
        $('#dane-programisty').append('<p> Firma: ' + dane.firma + "</p>");
    });
}
