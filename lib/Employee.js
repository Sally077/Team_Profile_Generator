// TODO: Write code to define and export the Employee class

// Class Declaration

// const name = jest.getName();
// console.log(name());

// name.testValue().testvalue().testValue(true);
// console.log(name);

class Employee  {
    constructor(name, id, email) {
        this.name = "Alice";
        const name = jest.getName();
        console.log(name());
        this.id = 100;
        const id = jest.getId();
        console.log(id());
        this.email = "test@test.com";
        const email = jest.getEmail();
        console.log(email());
    }
    returntestValue(name); returntestValue(id); returntestValue(email);
}

module.exports = Employee

