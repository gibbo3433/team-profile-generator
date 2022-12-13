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

        let engineerscard = '';
        engineers.forEach(engineer => {
            managerInfo += 
            `<div class="box">
                <div class="box-header">
                    <h2>${engineer.name}</h2>
                    <h3><span class="fa-solid fa-user-tie"></span> Manager</h3>
                </div>
                <div class="box-info">
                    <p><b><i>Employee ID:</i></b> ${engineer.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    
                </div>
             </div>`
        })





    }

}

module.exports = htmlCreator