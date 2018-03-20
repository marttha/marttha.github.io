const arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
    console.log(element);
});

var workForce = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

workForce.pracownicy.forEach(function(list){
  console.log(list.firstName + ' ' + list.lastName)
});

