class ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;


  }
  opiszKsiazke() {
     console.log( "Książka ma tytuł " + this.tytul + ", " + "autorem jest " + this.autor + " i została " + this.przeczytana);
  } 
}
var pierwszaKsiazka = new ksiazka('Wiedźmin','Andrzej Sapkowski', true);
console.log(pierwszaKsiazka.opiszKsiazke())
var pierwsza = [];
pierwsza[0] = pierwszaKsiazka['tytul'];
pierwsza[1] = pierwszaKsiazka['autor'];
pierwsza[2] = pierwszaKsiazka[true];
//Nie wiem jak zrobic typ boolean w js..
var drugaKsiazka = new ksiazka('tytul_2', 'autor_2', false);
var druga = [];
druga[0] = drugaKsiazka['tytul'];
druga[1] = drugaKsiazka['autor'];
druga[2] = drugaKsiazka['przeczytana'];
var trzeciaKsiazka = new ksiazka('tytul_3', 'autor_3', true);
var trzecia = [];
trzecia[0] = trzeciaKsiazka['tytul'];
trzecia[1] = trzeciaKsiazka['autor'];
trzecia[2] = trzeciaKsiazka['przeczytana'];

var arr = [pierwsza, druga, trzecia];
// console.log(arr);


// console.log(pierwszaKsiazka.opiszKsiazke(), drugaKsiazka.opiszKsiazke(), trzeciaKsiazka.opiszKsiazke());


function iloscPrzeczytanych() {
  ileRazy = 0;
  for (var i = 0; i < pierwsza.length; i++){
    // console.log(i);
    // console.log(arr[i][2])
    
    if (arr[i][2]=='przeczytana') ileRazy += 1;
    else continue;
  }
  console.log(ileRazy);
}
iloscPrzeczytanych()