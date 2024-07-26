// Add a static method to the Person class that return a genereic greeting message. Call this message without creating an instance of the class and log the message.

class Person  {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    static greeting () {
        console.log(`Hello, I am a static greeting.`);
    }
}

Person.greeting();

// add a static method to the Student class to keep track of numbers of students created. Increment this property in the constructor and log the total number of students.

class Student {
    name;
    age;
    static count = 0;
    static studentsCount() {
        console.log("Student count:", Student.count);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`Hello ${this.name} ${this.age}`);
        Student.count++;
    }

}

const s1 = new Student("Anil", 23);
Student.studentsCount();

const s2 = new Student("Akhil", 56);
const s3 = new Student("Rahul", 77);
const s4 = new Student("Kamal", 33);
Student.studentsCount();
