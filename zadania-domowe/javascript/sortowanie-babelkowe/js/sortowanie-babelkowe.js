function sortowanieBabelkowe(tablica) {
	for(var i = 0; i < tablica.length; i++) {
		for(var j = 0; j < tablica.length; j++) {
			if(tablica[j+1] < tablica[j]) {
				var wartoscMniejsza = tablica[j+1];
				var wartoscWieksza = tablica[j];
				
				tablica[j+1] = wartoscWieksza;
				tablica[j] = wartoscMniejsza;
			}
		}
	}
	return tablica;
}

var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
var wynik = sortowanieBabelkowe(tablica);

console.log("Posortowana tablica " + wynik);