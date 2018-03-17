var paragraf = document.getElementById('par2');
////sposób 1
//function obsluzZdarzenie(){
////    console.log("click");
//    console.log(event.type);
//}
////funkcje tworzymy bez nawiasów
//paragraf.onclick = obsluzZdarzenie;
//
////sposób 2
//
//paragraf.onclick = function(){
//    console.log( "Do obsługi zdarzenia przypisana funkcja anonimowa" );
//}
//mouseenter - najazd na element
//
//var counter = 0;
//paragraf.addEventListener("mouseenter", function(event){
//    counter++;
//    console.log( event.type);
//    console.log( "Zdarzenie wywołane" + counter + " raz");
//});


//var title = document.getElementById("main-header");
//title.addEventListener("mouseenter",function () {
//    title.style.fontSize = "70px";
//    title.style.color = "red";
//});
//title.addEventListener("mouseleave", function(){
//    title.style.fontSize = "initial";
//    title.style.color= 'initial';
//});




//function bodyColor(event){
//    console.log(event);
//    
//    document.body.style.backgroundColor = "red";
//}
//var title = document.getElementById("main-header");
//title.addEventListener("click", bodyColor);
//
////usuwanie obslugi zdarzenia
////title.removeEventListener("click", bodyColor);


//blokowanie domyślnych działań elementów
// document.querySelector('.link1').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("Kliknęłam link klasy .link1")
// });


























