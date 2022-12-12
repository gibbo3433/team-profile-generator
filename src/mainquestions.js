// Inquirer is the dependacy for making sure we can ask questions
const inquirer = require('inquirer');
// This will allow a html builder js file to be attached to this document
const htmlCreator = require('./htmlCreator');

// This makes sure to pull in the lib files for each job role
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// This is where the completed questions will fall into before being created into a card
const Engineer = [];
const Intern = [];
const Manager = [];

// This pulls the questions from the src folder to use in arrow functions
const Questions = require('./questions');

// This is where the user will begin after initalising the index file
const startMainQuestions = () => {
    inquirer
    // Firstly asking what type of employee to add
    .prompt(Questions.starterQuestions)
    .then((reponse) => {
        // Depending on what the user chooses, the correct questions will be output for them to answer
        switch(reponse.chosen) {
            case 'Add Engineer':

            engineerQuestions()
            break;

            case 'Add Intern':

            InternQuestions()
            break;

            case 'Add Manager':

            managerQuestions()
            break;
            
            // This will build the team page
            case 'Build Team Page':

            // This takes the now filled arrays and places them into the htmlCreator
            htmlCreator(Engineer, Intern, Manager);
            break;
            default:
          }
    })
};

module.exports = startMainQuestions;