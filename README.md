# Team_Profile_Generator

mit:'[![license: mit](https://img.shields.io/badge/MIT-License__for__MIT-yellowgreen)](https://opensource.org/license/mit/)'

## Description

User Story: As a manager I would like to generate a webpage that displays my teams basic information. So that I have quick access to their e-mails and github profiles.

Instructions:
I need to create a command line application that accepts user input using the test code provided. I need to create classes located in the directory __tests__ ALL of the tests must pass.

Classes: 
Parent class Employee needs a name, id, e-mail, getName(), getId(), getEmail() and getRole class that returns Employee.

The following three classes (Engineer, Intern and Manager) will extend Employee.

In addition to Employees properties and methods the Manager will have the following data:
 office number and getRole() which overrides to return to Manager.

In addition to Employees properties and methods the Engineer having the following data:
git hub username, getGithub() getRole() which overrides to return to Engineer.

In addition to Employees properties and methods the Intern will have the following data:
school, getSchool, getRole() which overrides to return to Intern.

When the user starts the application they are prompted to enter the team manager's Name, Employee Id, Email Address and Office Number.

After the user has entered the above requirements they are then presented with a menu giving the option to:
Add an Engineer
Add an Intern
Finish Building the Team


## Table of Contents

- [Description](#description)
- [Improvements](#improvements)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribution](#how-to-contribute)
- [Tests](#tests)

## Installation
<a id="installation"></a>

I have installed node.js and inquirer: ^8.2.4  and jest ^29.4.3 as dependancies. 

## Usage
<a id="usage"></a>

My program can be -------------------------------------

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:





## Credits
<a id="credits"></a>

There were no collaborators in this task.

The following resources below show videos and documentation that I have watched/used to create my project.


Video on how to test data in node using jest from Web Dev Simplified
https://www.youtube.com/watch?v=FgnxcUQ5vho

I looked up the documentation for creating classes in node and found the following example code
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

This video helped me to apply the data to the classes correctly
https://www.youtube.com/watch?v=Jv2uxzhPFl4&t=424s

To complete the tests to inhertit values from employee to manager I looked at the bootcamp training exercises for week 12 on subclasses and added the super value to the code.

I looked at the following code to help me to structure my code when nesting if statements as options using inquirer.
https://stackoverflow.com/questions/74075310/how-to-properly-nest-inquirer-prompts

Support from Jose Lopez - adding functions to prompts, arrays as input and fs to save to html on index.js file.

## License
<a id="license"></a>

I have chosen a MIT license for this project


## Badges
<a id="badges"></a>

I now have 3 git hub badge acheivements pullshark x 3, YOLO and a quickdraw badge

## Features
<a id="features"></a>

## How to Contribute
<a id="contribution"></a>

N/A

## Tests
<a id="tests"></a>

Test_1 - Parent class for Employee code:

<img src="./Images/test_01.png">

Test_2: Run jest to check data is working effectively for Employee Class

<img src="./Images/test_02.png">

Test_3 create class for Manager

<img src="./Images/test_03.png">

Test_4: Run jest to check data is working effectively for Manager Class

<img src="./Images/test_04.png">

Test_5: create class for Engineer

<img src="./Images/test_05.png">

Test_6: Run jest to check data is working effectively for Engineer Class

<img src="./Images/test_06.png">

Test_7 create class for Intern

<img src="./Images/test_07.png">

Test_8: Run jest to check data is working effectively for Intern Class

<img src="./Images/test_08.png">

Test_9: All test suites and 17 tests now passed

<img src="./Images/test_09.png">





