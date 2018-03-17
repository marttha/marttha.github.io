//pobranie elementu po id - tylko jeden element
//parametr w getElementByID bez #

var parFirst = document.getElementById("parFirst");
console.log(parFirst);

//pobranie elementów po klasie - kolekcja elementów
//parametr w getElementByClassName bez .
var elementLink = document.getElementsByClassName("link");
//consol.log(elementLink);
//consol.log(elememntLink.length);

//pobranie elementów po tagu

var elementTag = document.getElementsByTagName("p");
console.log(elementTag);

//pobranie wszystkich elementów po selektorze .superlink - tutaj niezbeden jest pobranie selektora klasy, jeßli pobieramy klasy lub id jeßli pobieramy po id

var elementSupelink = document.querySelectorAll(".superlink")
//consol.log(elementSupelink);

//pobieranie pojedynczego elelmentu po selektorze id

var parSecond = document.querySelector("#parSecond");
//console.log(parSecond);

var mojeLinki = document.querySelectorAll(".link");
//console.log(mojeLinki[1]);
//
//
//for(var i = 0;i< mojeLinki.length;i++){
//    console.log ("To mój link nr " + (i +1));
//    console.log(mojeLikni[i])
//    console.log("--------------------------")
//}


//petla forEach dziaøa na kolekcji pobranej za pomoca metody document.querySelectorAll

mojeLinki.forEach(function(element,index){
                  console.log(element);
     });


