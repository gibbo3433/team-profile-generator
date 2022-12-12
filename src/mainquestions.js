// Packages needed for this application
const inquirer = require('inquirer');
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

// This will start from running the index file and asks the user questions to build their page
const startMainQuestions = () => {
    inquirer
    .prompt(Questions.)
}


 



// Array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document:",
    },

    {
        type: "input",
        name: "description",
        message: "A brief description of your product:",
    },

    {
        type: "input",
        name: "installation",
        message: "What steps did you follow to create your project? ",
    },

    {
        type: "input",
        name: "usage",
        message: "What can your code be used for?",
    },

    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?",
    },   
        
        
    {
        type: "list",
        name: "license",
        message: "Please choose which license your ReadMe.md is licensed by:",
        choices: [
            {
                name:"Apache 2.0",
                value:"Apache 2.0",
            },
            {
                name:"GNU General Public License v3.0",
                value:"GNU General Public License v3.0",
            },
            {
                name:"Microsoft Public License",
                value:"Microsoft Public License",
            },
            {
                name:"none",
                value:"none",
            },
        ]
    },


    {
        type: "input",
        name: "tests",
        message: "Are there any tests for this project?",
    },

    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

];

// This will start the function to create the file
function writeToFile(fileName, data) {
    // This will write the data to the "./assets.ReadMe.md file"
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'))
};

// This function will start the inquirer package to start asking the questions required to complete the ReadMe
function init() {
    inquirer
    // This will prompt the user the questions
    .prompt(questions)
    // This will then take the answers from the user and place it into the generateMarkdown function
    .then((data) => {
        const readMeAnswers = generateMarkdown(data);
        // Then the data is sent to the writeTofile function to create the ReadMe file of the users answers
        writeToFile("./assets/ReadMe.md", readMeAnswers)
    });
};

// Function call to initialize app
init();