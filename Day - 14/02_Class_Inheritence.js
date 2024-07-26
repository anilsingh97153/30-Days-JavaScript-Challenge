// Define a class Student that extends the Person class. Add a property studentId and add a method to return student ID. Create an instance of Student class and log the student ID.

import Person from "./01_Class_Definition.js";

class Student extends Person {
    studentId;
    constructor(name, age, id) {
        super(name, age);
        this.studentId = id;
    }
// overridden method
    greeting() {
        console.log(`Hello ${this.name} You student ID is ${this.studentId}.`);
    }
    getStudentId() {
        return this.studentId;
    }
}

const s1 = new Student("Rahul", 26, 21145);
s1.greeting();
console.log();
// Override the greeting method in the student class to include student ID in the message. Log the Overridden greeting message.

// Created the greeting method above.

const s2 = new Student("Raghav", 27, 543543);
s2.greeting();



