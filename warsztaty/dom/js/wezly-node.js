var parFirst = document.getElementById("parFirst");
//pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElement

//console.log(parFirst.parentElement);
//console.log(parFirst);

//childNodesss pobiera wszystkie węzły w tym także białe znaki między elementami jak "text" oraz komentarze


//console.log (parFirst.childNodes[0]);

//children pobiera tylko te węzły które 
//console.log(parFirst.children);

//pobieram pierwsze dziecko elementu #parFirst
console.log(parFirst);
var pierwszeDziecko = parFirst.children[0];

//pobieram nastepny węzeł dla pierwszeDziecko które jest elementem w relacji rodzeństwo
console.log(pierwszeDziecko.nextSibling);


//pobiera następny węzeł dla pierwszegoDziecka niezależnie czy jest elementem html, textem czy komentarzem
//console.log(pierwszeDziecko.nextSibling);


//lastChild pobiera oststnie dziecko elementu niezalnie czy jest elementem html, textem czy komentarzem
//var ostatnieDziecko = parFirst.lastChild;
//lastElementChild pobiera oststenie dziecko które jest elementem html
//var ostatnieChild = parFirst.lastElementChild;
//consol.log(statnieDziecko);
//console.log(ostatnieDziecko.previousElementSibling);













