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
        name: "Employee",
        message: "What type of Employee would you like to add? (use arrow key)",
        choices:['Engineer', 'Intern', 'No more team members to add'],
        filter(val) {
            return val.toLowerCase(); // will apply lowercase
        }
    },
     // ------------------------------------------
     function Employee() {
        if (choices === "Engineer") {
            
                type: "input",
                name: "Engineer Name",
                message: "Enter the Engineer's Name : "
            },
            
        }



    
    {
        type: "input",
        name: "contribution",
        message: "Contributors : "
    },
    {
        type: "input",
        name: "tests",
        message: "Description of Test : "
    },
    {
        type: "input",
        name: "email",
        message: "For questions please email (e-mail) : "
        
    },
    {
        type: "input",
        name: "github",
        message: "For questions about the readme generator (github) : "
    },

])



// Code to run Query Function

function runQuery() {
    return inquirer.prompt(promptUser) // prompt displays the questions
    .then((answers)=> { //then command works with the catch command to async or handle the error
        const mark = MarkDown.generateReadme(answers) //generates mark down answers in readme
        fs.writeFile('README.md', mark, function(err) { //fs.write document to write a file called readme.md
            if(err) { //if statement checks that file has been written successfully
                console.log('Fail: Could not save file', err) 
            } else {
                console.log("success: new README.md file generated inside the current folder")
            }
        })

    })
    .catch((error)=> { //catches statements and defines a block of code
        console.log(error) //console log error in the terminal
    })
}
//runs the query
runQuery()