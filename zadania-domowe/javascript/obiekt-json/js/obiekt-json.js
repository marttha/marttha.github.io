
var jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
    
};
console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach(function(list){
  console.log(list.firstName + ' ' + list.lastName)
});

//const arr = ['a', 'b', 'c'];
//
//arr.forEach(function(element) {
////    console.log(element);
//    
//});
//
//

