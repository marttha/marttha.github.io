var array = [1, 2, 3, 4, 5, 6] ;

function addAndMultiply(arrayFactor){
  
  var multiplyResult = 1 ;
  var addResult = 0 ;
  
  for(var i = 0 ; i < arrayFactor.length ; i++){
    multiplyResult *= arrayFactor[i];
    addResult += arrayFactor[i];
  }
  
  console.log('Suma elementów tablicy = ' + addResult);
  console.log('Iloczyn elementów tablicy = ' + multiplyResult );
  
}

addAndMultiply(array);