// This will ask the user what they want to do as the app loads
const starterQuestions =[
    {   type: 'list',
        message: 'What do you want to do?',
        name: 'selection',
        choices: ['Add an engineer', 'Add an intern', 'Add a manager', 'Create team HTML page'],
      },
];

// Questions for the engineer
const EngineerQuestions =[
    {
        type: "input",
        name: "name",
        message: "What's the employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What's the the employee's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What's the employee's email address?",
    },
    {
        type: "input",
        name: "github",
        message: "what's the engineer's GitHub username?",
    },
];

// Questions for the Intern
const InternQuestions =[
    {
        type: "input",
        name: "name",
        message: "What's the employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What's the the employee's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What's the employee's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "what's the intern's school?",
    },
];

// Questions for the Manager
const ManagerQuestions =[
    {
        type: "input",
        name: "name",
        message: "What's the employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What's the the employee's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What's the employee's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "what's the managers's office numnber?",
    },
];

// This will make the questions avaliable for other files to use
module.exports = {starterQuestions, EngineerQuestions, InternQuestions, ManagerQuestions};