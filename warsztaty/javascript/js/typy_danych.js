//typ liczbowy - można wykonać działanie artmetyczne
var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
//console.log (suma);
//console.log ( typeof wyplata);

//typ łańsuchowy - String(znak plus łączy String, czyli działa nieco inaczej niż w przypadku typu liczbowego)

var strWyplata ="4500\n";
var strPremia ="\"850\"";
var strSuma = strWyplata + strPremia;
//console.log(strSuma);
//console.log(typeof strSuma);

//typ logiczny - przyjuje jedną z dwóch wartości true albo false
var czyJestWiosna = false;
if(czyJestWiosna){
    console.log ("Tak, jest juz wiosna");
    
} else {
    console.log ("Nie, jeszcze trwa zima");
}
//console.log(typeof czyJestWiosna);

//typy specjalne

var zmiennaTylkoZadeklarowana;
console.log(zmiennaTylkoZadeklarowana);

var zmiennaNull = null;
console.log(zmiennaNull);