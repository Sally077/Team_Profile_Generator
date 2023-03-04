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

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title : "
    },
    {
        type: "input",
        name: "description",
        message: "Description of Project : "
    },
    {
        type: "input",
        name: "installation",
        message: "Installation of Instructions : "
    },
    {
        type: "list",
        name: "license",
        message: "license",
        choices:['mit', 'isc', 'gnpulv3'],
        filter(val) {
            return val.toLowerCase(); // will apply lowercase
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Project Use : "
    },
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

]

// Code to run Query Function

// function runQuery() {
//     return inquirer.prompt(questions) // prompt displays the questions
//     .then((answers)=> { //then command works with the catch command to async or handle the error
//         const mark = MarkDown.generateReadme(answers) //generates mark down answers in readme
//         fs.writeFile('README.md', mark, function(err) { //fs.write document to write a file called readme.md
//             if(err) { //if statement checks that file has been written successfully
//                 console.log('Fail: Could not save file', err) 
//             } else {
//                 console.log("success: new README.md file generated inside the current folder")
//             }
//         })

//     })
//     .catch((error)=> { //catches statements and defines a block of code
//         console.log(error) //console log error in the terminal
//     })
// }
// //runs the query
// runQuery()