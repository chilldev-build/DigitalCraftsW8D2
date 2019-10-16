// class Person {
    // constructor(name, age) {
        // this.name = name;
        // this.age = age;
    // }
// 
    // static describe(subject) {
        // return `${subject.name}, ${subject.age} years old`;
    // }
// 
    // greet(greeting) {
        // return `Hello I am ${this.name}. I am ${this.age} years old. This is ${greeting}!`;
    // }
// }
// 
// const me = new Person("Chris", 38);
// const jason = new Person("Jason", 45);
// 
// console.log(Person.describe(jason));
// console.log(jason.greet(''));

//mom and daughter inheritance exercise

class Person {
    constructor(first, last, eyeColor, hairColor){
        debugger;
        this.name = {
            first,
            last
        };
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }

    showInfo() {
        return `Hello I am ${this.name.first} ${this.name.last}. I have ${this.eyeColor} eyes and ${this.hairColor} hair!`;
    };

}

class Child extends Person {
    constructor(first, last, eyeColor, hairColor, age) {
        super(last);
        
        this.name.first = first;
        this.name.last = Person.last;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
}

var mom = new Person('Alice', 'Wong','brown','black');
var daughter = new Child('Ilene','Wong', 'green','blonde', '12');

console.log(mom.showInfo());
console.log(daughter.showInfo());
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(Child.prototype));