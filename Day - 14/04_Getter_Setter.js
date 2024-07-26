// Add a getter method to the Person class to the return the full name (assume a firstName and lastname property). Create an instance and log the full name using the getter.

// Getters and setters in JavaScript are special kinds of methods that provide a way to interact with an object's properties in a more controlled and abstracted manner compared to regular methods. 

class Person {
    _firstName;
    _lastName;
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}

const p1 = new Person("Anil", "Singh");
console.log("Full name of p1:", p1.fullName);
p1.firstName = "Anil";
p1.lastName = "Singh Suyal";
console.log(p1.fullName);