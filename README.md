# Team_Profile_Generator

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


