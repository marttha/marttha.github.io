//pobieram istniejący węzeł o id output
var istniejacyWezel = document.getElementById("output");
//sprawdzam czy udało się go podpiąc
//console.log(istniejacyWezel);

//tworzę nowy element html
var newElement = document.createElement("p");

//tworzę treść do paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę treść paragrafu, o!");

//wstawiam nowoutworzony tekst do nowoutworzonego paragrafu
newElement.appendChild(newElementContent);

//dodaje do paragrafu atrybut class='textpar' 
newElement.setAttribute('class', 'textpar');
//console.log(newElement);

//wstawiam nasz przygotowany paragraf do div#output
istniejacyWezel.appendChild(newElement);

//usuwanie elementów z dokumentu na dwa sposoby

//istniejacyWezel.parentElement.removeChild(istniejacyWezel);a
//document.getElementById("parFirst").removeChild(istniejacyWezel);

//insertBefore
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore( br, link.nextSibling );



//usuwanie atrybutów
link.removeAttribute('class');






















