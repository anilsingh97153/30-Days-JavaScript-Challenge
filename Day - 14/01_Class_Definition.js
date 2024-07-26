// class Person with properties name, age, and greeting method 
// Also add a method to class that updates age of a person, and logs
class Person  {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    greeting () {
        console.log(`Hello ${this.name}!`);
    }

    updateAge(age) {
        this.age = age;
        console.log(`Updated age of ${this.name}: ${this.age}`);
    }
}

const p1 = new Person("Anil", 23);
p1.greeting();
console.log(p1);

// update the age
p1.updateAge(25);


export default Person;