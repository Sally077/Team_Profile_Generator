const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// make this a function (call in inquirer init function)
function options() {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What type of Employee would you like to add? (use arrow key)",
      choices: ["Engineer", "Intern", "Finish building the Team"],
    })
    .then((response) => {
      switch (response.action) {
        case "Engineer":
          engineer();
          break;
          case "Intern":
            intern();
            break;
        default:
            createHtml()
          break;
      }
    });
}
//

// function added to handle the actions chosen by the user in the main loop
function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?  : ",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID?  : ",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email?  : ",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the Engineer's GitHub Username?  : ",
      },
    ])
    .then((answers) => {
        // store the answers
        console.log(answers);
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        teamMembers.push(engineer);
      // we need to then run the menu
      options();
        })
    }

    function intern(){
        inquirer.
        prompt ([
            {
                type: "input",
                name: "internName",
                message: "What is the Intern's name?  : "
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Interns's ID?  : "
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Interns's Email?  : "
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the name of the Intern's school?  : "
            },
        ])

        .then((response) => {
            console.log(response);
            options()
        });

    }


// Main logic flow
const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "teamManager",
        message: "What is the Team Manager's Name? : ",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Team Manager's ID?  : ",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Team Manager's Email?  : ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Team Manager's office number?  : ",
      },
    ])
    .then((answers) => {
      // do something with the answers
      console.log(answers);
      const manager = new Manager(
        answers.teamManager,
        answers.managerId,
        answers.email,
        answers.officeNumber
      );
      //   push the manager information into the team member array
      teamMembers.push(manager);
      // we need to then run the menu
      options();
    });
};

init();

function createHtml(){
    fs.writeFileSync(outputPath, render(teamMembers))
}
// Code to run Query Function

// function runQuery() {
//     return inquirer.prompt(promptUser) // prompt displays the questions
//     .then((answers)=> { //then command works with the catch command to async or handle the error
//         const outputPath = render.pageTemplate.js(answers) //generates mark down answers in readme
//         fs.writeFile('team.html', outputPath, function(err) { //fs.write document to write a file called readme.md
//             if(err) { //if statement checks that file has been written successfully
//                 console.log('Fail: Could not save file', err)
//             } else {
//                 console.log("success: new team.html file create")
//             }
//         })

//     })
//     .catch((error)=> { //catches statements and defines a block of code
//         console.log(error) //console log error in the terminal
//     })
// }
// //runs the query
// runQuery()

// }
