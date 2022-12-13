// This grabs the file system
const fs = require('fs');

// This makes sure to pull in the lib files for each job role
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// This function starts when the 'Create Team HTML Page' is selected by the user
// It will draw in the now semi-full arrays and display this data into html formatting
const htmlCreator = (engineers, interns, managers) => {

    // This makes syncs the data so that the template literals can be added below
    let createcards = fs.readFileSync("./temp.index.html", 'utf8')

    // This for loops make sure that all parts of the array are added for each type of employee
    if (createcards) {

        // This is where the engineer cards will be added and how they will look
        let engineerscard = '';
        engineers.forEach(engineer => {
            engineerscard += 
            `<div class="card">
                <div class="card-header">
                    <h2>${engineer.name}</h2>
                </div>
                <div class="card-info">
                    <p>Employee ID: ${engineer.id} </p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>GitHub: <a href="https://github.com/${engineer.github}">@${engineer.github}</a></p>
                </div>
             </div>`
        })

        // This is where the intern cards will be added and how they will look
        let internscard = '';
        interns.forEach(intern => {
            internscard += 
            `<div class="card">
                <div class="card-header">
                    <h2>${intern.name}</h2>
                </div>
                <div class="card-info">
                    <p>Employee ID: ${intern.id} </p>
                    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p>School: ${intern.school}</p>                    
                </div>
             </div>`
        })

        // This is where the manager cards will be added and how they will look
        let managerscard = '';
        managers.forEach(manager => {
            managerscard += 
            `<div class="card">
                <div class="card-header">
                    <h2>${manager.name}</h2>
                </div>
                <div class="card-info">
                    <p>Employee ID: ${manager.id} </p>
                    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p>Office Number: ${manager.officeNumber}</p>                    
                </div>
             </div>`
        })





    }

}

module.exports = htmlCreator