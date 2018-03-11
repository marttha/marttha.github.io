//var zmiennaGlobalna = "Tak! Jestem zmienną globalną i jest widoczna w funkcjach";
//function wyswietlZmienna(){
////    console.log(zmiennaGlobalna);
//    var zmiennaLokalna = "Tal! Zmienna lokalna to ja. Przestrzeń globalne mnie nie zobczy";
//}
//wyswietlZmienna()
//console.log(zmienneLokalna);

 var zmienna = "Zmienna globalna";
function pokazZmienna(){
     zmienna = "Zmienna lokalna"
//    console.log (zmienna);
}
pokazZmienna();
console.log (zmienna);