var name ="Tu jestem poza obiektem";

var obiekt ={
    name: "Pierwszy mój obiekt",
    height: 180,
    print: function(){
        console.log(this.name);
    },
}
//właściwości
obiekt.age = 32; 
//metody
obiekt.showAge = function(){
    console.log(this.age);
}

obiekt.showAge();



