// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Class Declaration

class Engineer {
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
       
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getGitHub() {
        return this.gitHubUser;
    }
    
    
    
    getRole() {
        return "Engineer";
    }
}
 

 

module.exports = Engineer