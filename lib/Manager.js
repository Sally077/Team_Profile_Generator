// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Class Declaration (inherited??)
const  Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
       
        
    }
   
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}


// module.exports = Employee
module.exports = Manager

