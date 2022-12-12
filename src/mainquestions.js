// Inquirer is the dependacy for making sure we can ask questions
const inquirer = require('inquirer');
// This will allow a html builder js file to be attached to this document
const htmlCreator = require('./htmlCreator.js');

// This makes sure to pull in the lib files for each job role
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// This is where the completed questions will fall into before being created into a card
const engineers = [];
const interns = [];
const managers = [];

// This pulls the questions from the src folder to use in arrow functions
const Questions = require ('./questions');

// This is where the user will begin after initalising the index file
const startMainQuestions = () => {
    inquirer
    // Firstly asking what type of employee to add
    .prompt(Questions.starterQuestions)
    .then((reponse) => {
        // Depending on what the user chooses, the correct questions will be output for them to answer
        switch(reponse.selection) {

            case 'Add engineer':
            engineerQuestions()

            break;

            case 'Add intern':
            InternQuestions()

            break;

            case 'Add manager':
            managerQuestions()

            break;
            
            // This will build the team page
            case 'Create team HTML page':

            // This takes the now filled arrays and places them into the htmlCreator
            htmlCreator(engineers, interns, managers);
            break;
            default:
          }
    })
};

// This starts the process to add an Engineer into the array
const engineerQuestions = () => {
    inquirer
    .prompt(Questions.EngineerQuestions)
    .then((reponse) => {
        const engineer = new Engineer(reponse.name, reponse.id, reponse.email, reponse.github)
        engineers.push(engineer);
        // Returns back to the starter questions if another needs to be added
        startMainQuestions();
    })
};

// This starts the process to add an Intern into the array
const InternQuestions = () => {
    inquirer
    .prompt(Questions.InternQuestions)
    .then((reponse) => {
        const intern = new Intern(reponse.name, reponse.id, reponse.email, reponse.school)
        interns.push(intern);
        // Returns back to the starter questions if another needs to be added
        startMainQuestions();
    })
};

// This starts the process to add a manager into the array
const managerQuestions = () => {
    inquirer
    .prompt(Questions.ManagerQuestions)
    .then((reponse) => {
        const manager = new Manager(reponse.name, reponse.id, reponse.email, reponse.officeNumber)
        managers.push(manager);
        // Returns back to the starter questions if another needs to be added
        startMainQuestions();
    })
};

module.exports = startMainQuestions;