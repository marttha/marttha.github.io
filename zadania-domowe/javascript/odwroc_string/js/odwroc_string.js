function odwracanie(ciagZnakow) {
    var ciagPodzielony = ciagZnakow.split('');
    var ciagOdwrocony = ciagPodzielony.reverse();
    var ciagZnowPolaczony = ciagOdwrocony.join('');
    console.log(ciagZnowPolaczony);
    return ciagZnowPolaczony;
}

odwracanie("Akademia108");
