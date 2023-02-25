// TODO: Write code to define and export the Employee class

//Declaration

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const Employee = class {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const Employee = class Employee2 {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
module.exports = Employee

