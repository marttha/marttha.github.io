function Fibonaccie(nElem){
  
  var fibElem0 = 0 ;
  var fibElem1 = 1 ;
  var fibElemNm1 = fibElem1;
  var fibElemNm2 = fibElem0;
  var fibElemN ;
  
  if( nElem === 0 ){
    console.log((nElem+1) + ' wyraz ciągu,o indeksie ' + nElem +' =  ' + fibElem0);
  return fibElem0 ;
  }
  if( nElem === 1 ){
    console.log((nElem+1) + ' wyraz ciągu,o indeksie ' + nElem +' =  ' + fibElem1);
  return fibElem1 ;
  }
  
  if( nElem > 1 ){
    console.log('Szukam ' + nElem + ' elementu ciągu Fibonaccieego \n') ;
    for(var i=2 ; i <nElem ; i++){
              console.log( 'Liczę ' + (i+1) + ' wyraz ciągu, ' + 'o indeksie ' + i + '.');
              console.log('--- '+((i - 2)+1) + ' wyraz ciągu, o indeksie ' + (i - 2)+ ' = ' + fibElemNm2) ;
              console.log('--- '+((i - 1)+1) + ' wyraz ciągu, o indeksie ' + (i - 1)+ ' = ' + fibElemNm1) ;
              console.log((i+1) + ' wyraz ciągu, ' + 'o indeksie ' + i + ' = ' 
                  + ((i - 2)+1) + ' wyraz ciągu, o indeksie ' + (i - 2)
                  + ((i - 1)+1) + ' wyraz ciągu, o indeksie ' + (i - 1)) ;
          
              console.log((i+1) + ' wyraz ciągu, ' + 'o indeksie ' + i + ' = ' + fibElemNm1 + ' + ' + fibElemNm2) ;
        fibElemN = fibElemNm1 + fibElemNm2 ;
         
              console.log('--------> '+(i+1) + ' wyraz ciągu, ' + 'o indeksie ' + i + ' = ' + fibElemN +'\n');
        fibElemNm2 = fibElemNm1 ;
        fibElemNm1 = fibElemN ;
     
    } 
  return fibElemN ;
  }
  
}

var fibElem0 = Fibonaccie(0); console.log('Szukany wyraz ciągu to : ' + fibElem0 );
var fibElem1 = Fibonaccie(1); console.log('Szukany wyraz ciągu to : ' + fibElem1 );
var fibElem8 = Fibonaccie(13); console.log('Szukany wyraz ciągu to : ' + fibElem8 );

