//1)Dodaj odpowiedni kod aby ponizszy kod dzialal

console.log(person1.firstName); //'Arkadiusz';
console.log(person1.lastName); //Ar;
person1.print();    //firstName Arkadiusz lastName Ar

//2)Dodaj odpowiedni kod aby ponizszy kod dzialal

person2_1 = new Person2("Ala","Kowalska");
person2_2 = new Person2('Arkadiusz', 'Nowak');
person2_3 = new Person2("Anna","Nowak");


person2_1.print();  //First name: Ala, Second name: Kowalska
person2_2.print();  //First name: Arkadiusz, Second name: Nowak
person2_3.print();  //First name: Anna, Second name: Nowak



//3) Dziedziczenie:
// Stworz hierachie obiektow Shape<--Rectangle,
// Shape<--Triangle
//Shape powinien zawierac pole name,
//Triangle: name, a,b,c,
// Rectangle: a,b


//4)
function F1()
{

    this.a = 10;
}

//a) Gdzie zostanie utworzone a (zmienna/wlasciwosc) w jakim kontekscie ?
var vf1 = new F();
F1();


//5) j/w ?
function F1()
{
    this.a = 10;
}

function F2()
{
    F1();
};
F2();
