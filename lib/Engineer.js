// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Class Declaration

class Engineer {
    constructor(name, id, email, gitHub, gitHubUser) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        this.gitHubUser = "gitHubUser";
        
       
    }

 
    getGitHub() {
    
        return this.gitHub;
        return "GitHubUser";

    }
    
    
    
    getRole() {
        return "Engineer";
    }
}
 

 

module.exports = Engineer