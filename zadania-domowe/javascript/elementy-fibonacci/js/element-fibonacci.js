//function obliczElement(n) {
//    /*  pobranie parametru funkcji */
//    var elemN = n;
//    
//    /* zdefiniowenie dwóch pierwszych elementów ciągu */
//    var elem1 = 0;
//    var elem2 = 1;
//    
//    /* zmienna do obliczenia kolejnego elementu ciągu*/
//    var elemK = 0;
//    
//    /* obliczenie elementu ciągu*/
//    if (elemN==1) {
//      console.log("1 element ciągu Fibonnaciego wynosi: " + elem1);
//      return elem1;
//
//   } else if (elemN==2) {
//      console.log("2 element ciągu Fibonnaciego wynosi: " + elem2);
//      return elem2;
//
//   } else 
//    /* pętla wyliczająca kolejne elementy*/
//      for (var i = 1; i < elemN; i++) {
//      elemK = elem2 + elem1;
//      elem1 = elem2;
//      elem2 = elemK;
//      }
//      
//    /* wyswietlenie wyniku w konsoli */
//    console.log( n + " element ciągu Fibonnaciego wynosi: " + elemK );
//  
//    /* zwrócenie wyniku*/
//        return elemK;
//}
//
//obliczElement(10);




//function fibonacci(n){
//    if (n===0){
//        return 0;
//    }
//    if (n<=2){
//        return 1;
//    }
//    return fibonacci(n-1)+ fibonacci(n-2);
//}
//
//
//console.log(fibonacci(0));







function fibonacci(n) {
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
var fibPrev = 0;
var fibNext = 1;
var fibCurrent = 0;
    
    
    
    
    
    for(var i = 2; i <= n; i++){
        fibCurrent = fibPrev + fibNext;
        fibPrev = fibNext;
        fibNext = fibCurrent;
    }
      return fibCurrent;  
}

console.log (fibonacci(5));






















