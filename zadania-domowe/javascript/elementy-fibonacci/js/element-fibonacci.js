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

console.log (fibonacci(4));






















