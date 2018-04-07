function sumaWyplat(selektor){
    var elementy= document.querySelectorAll(selektor);
//    console.log (elementy);
    var iloscElementow = elementy.length;
    var suma = 0;
    for(var i = 0; i < iloscElementow ; i++){
        var val = elementy [i].innerHTML;
        
        suma += parseInt(val);
        
    }
//    console.log(suma);
    return suma;
}


function wyswietlWynik(wynikDoWyswietlenia){
    var div = document.createElement('div');
    var text =document.createTextNode(wynikDoWyswietlenia +' zł');
    div.appendChild(text);
    
    document.body.appendChild(div);
}



var wynikObliczenia = sumaWyplat('p');
wyswietlWynik(wynikObliczenia);