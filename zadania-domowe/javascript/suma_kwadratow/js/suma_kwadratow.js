function SumaIloczyn(parametr) {
    /*  zapisanie tablicy jako parametr funkcji */
    var tablica = [];
    tablica = parametr;

    /*  utworzenie zmiennej do sumowania */
    var suma = 0;

    /* pętla sumująca i mnożąca kolejne elementy tablicy */
    for (var i = 0; i < tablica.length; i++) {
       suma =  suma + Math.pow(tablica[i], 2) ;
     }
    
    /* wyswietlenie wyniku  - musi być przed return */
    console.log("Suma kwadratów liczb w tablicy wymosi: " + suma + "."); 
     
    /* zwrócenie wyniku działania funkcji */
    return suma; 
}

SumaIloczyn([0,1,2,3,4,5]);