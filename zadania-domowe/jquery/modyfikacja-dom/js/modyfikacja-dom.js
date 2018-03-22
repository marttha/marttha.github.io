// paragrafy w dol
$("#przyciskDol").click(function(){
tablicaParagrafow[0] = przechowalniaTablicyParagrafow[4];
tablicaParagrafow[1] = przechowalniaTablicyParagrafow[0];
tablicaParagrafow[2] = przechowalniaTablicyParagrafow[1];
tablicaParagrafow[3] = przechowalniaTablicyParagrafow[2];
tablicaParagrafow[4] = przechowalniaTablicyParagrafow[3];

przechowalniaTablicyParagrafow[0]=tablicaParagrafow[0];
przechowalniaTablicyParagrafow[1]=tablicaParagrafow[1];
przechowalniaTablicyParagrafow[2]=tablicaParagrafow[2];
przechowalniaTablicyParagrafow[3]=tablicaParagrafow[3];
przechowalniaTablicyParagrafow[4]=tablicaParagrafow[4];

  
var paragraf1=tablicaParagrafow[0];
var paragraf2=tablicaParagrafow[1];
var paragraf3=tablicaParagrafow[2];
var paragraf4=tablicaParagrafow[3];
var paragraf5=tablicaParagrafow[4];

$(par1).html(paragraf1);
$(par2).html(paragraf2);
$(par3).html(paragraf3);
$(par4).html(paragraf4);
$(par5).html(paragraf5);  
});

// paragrafy w gore
$("#przyciskGora").click(function(){
tablicaParagrafow[0] = przechowalniaTablicyParagrafow[1];
    tablicaParagrafow[1] = przechowalniaTablicyParagrafow[2];
tablicaParagrafow[2] = przechowalniaTablicyParagrafow[3];
tablicaParagrafow[3] = przechowalniaTablicyParagrafow[4];
tablicaParagrafow[4] = przechowalniaTablicyParagrafow[0];

przechowalniaTablicyParagrafow[0]=tablicaParagrafow[0];
przechowalniaTablicyParagrafow[1]=tablicaParagrafow[1];
przechowalniaTablicyParagrafow[2]=tablicaParagrafow[2];
przechowalniaTablicyParagrafow[3]=tablicaParagrafow[3];
przechowalniaTablicyParagrafow[4]=tablicaParagrafow[4];

var paragraf1=tablicaParagrafow[0];
var paragraf2=tablicaParagrafow[1];
var paragraf3=tablicaParagrafow[2];
var paragraf4=tablicaParagrafow[3];
var paragraf5=tablicaParagrafow[4];

$(par1).html(paragraf1);
$(par2).html(paragraf2);
$(par3).html(paragraf3);
$(par4).html(paragraf4);
$(par5).html(paragraf5);  
});


var tablicaParagrafow = ["To jest paragraf 1", "To jest paragraf 2", "To jest paragraf 3", "To jest paragraf 4", "To jest paragraf 5"];

var przechowalniaTablicyParagrafow = [tablicaParagrafow[0], tablicaParagrafow[1], tablicaParagrafow[2], tablicaParagrafow[3], tablicaParagrafow[4]];