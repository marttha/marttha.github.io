//funkcja bez parametrów
function wyswietlWKonsoli(){
    console.log( "Marta Kapusta" );
}

wyswietlWKonsoli();

// funkcja z parametrami
function wyswietlWKonsoliParam( imie, nazwisko){
    console.log( imie + " " + nazwisko);
}
wyswietlWKonsoliParam( "Adam", "Nowacki");
wyswietlWKonsoliParam( "Marta", "Kapusta");

//zwracanie wartości przez funkcję
function obliczPodatek( kwota, procentPodatek){
    var wynik = kwota * ( procentPodatek / 100);
     return wynik.toFixed(2);  
    }
var obliczenia1 = obliczPodatek (1000, 10);
    console.log( "Wysokość obliczonego podatku wynosi" + obliczenia1);

var w = obliczPodatek(1000, 10);
var x = obliczPodatek(2500, 30);
var z = obliczPodatek(25000, 23);

console.log(w,x,z);

function wyswietlWynik(wartosc){
    document.write(wartosc);
}
var obliczenia = obliczPodatek(1000, 10);
wyswietlWynik(obliczenia);