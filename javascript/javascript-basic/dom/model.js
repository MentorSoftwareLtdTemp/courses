function Person() {
    this.firstName='';
    this.lastName='';
}

function Employee(dep, fn, ln) {
    Person.call(this);
    this.dep=dep;
    this.firstName = fn;
    this.lastName = ln;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var person1 = new Employee('IT','Jan','Kowalski');
var person2 = new Employee('IT','Jan','Nowak');
var person3 = new Employee('IT','Jan','Iksinski');
var person4 = new Employee('IT','Jan','Noname');

console.log(person2.dep);
console.log(person2.firstName);
console.log(person2.lastName);

