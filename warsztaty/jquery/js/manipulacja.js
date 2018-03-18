$(function(){
    //pobieranie tekstu
    var textParagrafId = $("#paragraf").text();
    console.log(textParagrafId);
    
    //ustawianie tekstu
    $("#paragraf").text("Nowy tekst ustawiony metodą text()");
    
    //dodawanie HTML
    $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>");
    
    //dodawanie treści na końcu selektora
    $(".paragrafnext").append("<br>Nowa treść na końcu selektora");
    
    //dodawanie treści za selektorem
    $(".paragrafnext").after("<h6> Nowy element za selektorem</h6>");
    
    //usuwanie elementu wraz zawartością
    $(".paragrafnext").remove();
    
    //usuwanie tylko zawartości elementu
    $("div").empty();
    
    //dodawanie pojedynczego stylu css
    $("div").css("background-color", "red");
    
    //dodawanie wielu styli css
    $("div").css({
        width: "600px",
        height: "120px",
        backgroundColor:"lime"
    });
    
    //dodawanie klasy do element
    $("h1").addClass("nowa_klasa");
    
    //dodawanie artybutów do elementu
    $("h1").attr("title", "Główny tytuł ustawiony za pomocą jQuery");
});

























