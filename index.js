const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const promptUser = () =>
inquirer.prompt([

    {
        type: "input",
        name: "Team Manager",
        message: "What is the Team Manager's Name? : "
    },
    {
        type: "input",
        name: "Manager Id",
        message: "What is the Team Manager's ID?  : "
    },
    {
        type: "input",
        name: "email",
        message: "What is the Team Manager's Email?  : "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Team Manager's office number?  : "
    },
    {
        type: "list",
        name: "action",
        message: "What type of Employee would you like to add? (use arrow key)",
        choices:['Engineer', 
                 'Intern', 
                 'Exit'
                ]
           }])
        
        

    
     // function added to handle the actions chosen by the user in the main loop
        const performAction = async (action) => {
            switch(action) {
                case "Engineer":[
                    {
                        type: "input",
                        name: "Engineer Name",
                        message: "What is the Engineer's name?  : "
                    },
                    {
                        type: "input",
                        name: "Engineer ID",
                        message: "What is the Engineer's ID?  : "
                    },
                    {
                        type: "input",
                        name: "Engineer Email",
                        message: "What is the Engineer's Email?  : "
                    },
                    {
                        type: "input",
                        name: "Engineer GitHub",
                        message: "What is the Engineer's GitHub Username?  : "
                    },
                ]
                  switch(action) { 
                case "Intern" :[
                    {
                        type: "input",
                        name: "Intern Name",
                        message: "What is the Intern's name?  : "
                    },
                    {
                        type: "input",
                        name: "Intern ID",
                        message: "What is the Interns's ID?  : "
                    },
                    {
                        type: "input",
                        name: "Intern Email",
                        message: "What is the Interns's Email?  : "
                    },
                    {
                        type: "input",
                        name: "Intern School",
                        message: "What is the name of the Intern's school?  : "
                    },
                ]
                    

                  }



                    let employeeData = await prompt(questions); // Grab the employee data by awaiting prompt
                    console.log(employeeData); // Console out the data
                    break;
                default:
                    break;
            }
            
        // Main logic flow
         const init = async () => {
         let action;

        // While the user has not chosen to exit...
        while (action != "Exit") {
            action = (await prompt(promptUser)).action; // Get their choice by awaiting a prompt
            performAction(action); // Perform that chosen action
        }
    }

init();
    


// Code to run Query Function

function runQuery() {
    return inquirer.prompt(promptUser) // prompt displays the questions
    .then((answers)=> { //then command works with the catch command to async or handle the error
        const outputPath = render.pageTemplate.js(answers) //generates mark down answers in readme
        fs.writeFile('team.html', outputPath, function(err) { //fs.write document to write a file called readme.md
            if(err) { //if statement checks that file has been written successfully
                console.log('Fail: Could not save file', err) 
            } else {
                console.log("success: new team.html file create")
            }
        })

    })
    .catch((error)=> { //catches statements and defines a block of code
        console.log(error) //console log error in the terminal
    })
}
//runs the query
runQuery()

        }

module.exports = Manager
module.exports = Engineer
module.exports = Intern