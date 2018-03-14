function sortowanie(ciagZnakow) {
    var ciagPodzielony = ciagZnakow.split('');
    var znakiPosortowane = ciagPodzielony.sort();
    var wyrazPosortowany = znakiPosortowane.join('');
    console.log(wyrazPosortowany);
    var ciagStringowy = wyrazPosortowany + "";
    return ciagStringowy;
}

sortowanie("Akademia108");