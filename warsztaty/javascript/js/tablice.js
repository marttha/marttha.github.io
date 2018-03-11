var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Sandra'];

// dodawanie elementów tablicy na końcu

imiona[6] = 'Mikołaj';
imiona[7] = 'Kinga';
imiona.push("Kamil", "Karol", "Anna");
imiona.push("Marcin");

// usuwanie elementów tablicy z końca

imiona.pop();
imiona.pop();

// dodawanie elementów tablicy na poczatku
imiona.unshift("Sebastian");
imiona.unshift("Małgorzata");

//usuwanie elementów z początka  tablicy
imiona.shift();

//var usunietyElement=imiona.shift;
//console.log(usunietyElement)

//console.log(imiona);




//sprawdzenie "długości"tablicy
var iloscElementowTablicy = imiona.length;
//console.log(iloscElementowTablicy);
//console.log(imiona);


//rozbijanie tablicy na ciąg tekstowy
var elementyTablicyString = imiona.join(",----,");
//console.log(elementyTablicyString);


////"odwrócenie tablicy"
//imiona.reverse();
//console.log(imiona);

//sortowanie tablicy
//imiona.sort();
//console.log(imiona);


//sprawdzenie czy wartość w tablicy istnieje

//console.log(imiona.indexOf("Sandra"));
//console.log(imiona.indexOf("Czesław"));


//imiona.splice(1,2);
//console.log(imiona);

















