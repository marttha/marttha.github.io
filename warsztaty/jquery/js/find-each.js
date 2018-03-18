//metoda find wyszukuje potomków selektora. W ponizszym przykładzie
//poszuka paragrafów znajdujących się w div
//metoda find może wyszukiwać po tagu, klasie, id, atrybucie
$("div").find("p").css({fontSize : "60px", color: "deeppink"});


//metoda each(pętla przechodzi po kazdym elemencje p)
$("p").each(function(index, element){
   console.log(index, element); 
    $(this).addClass('new_class').css({fontSize: "40px", backgroundColor: "yellow"});
});