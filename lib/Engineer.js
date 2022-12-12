const Employee = require('./Employee.');

class Engineer extends Employee {

    constructor (id, name, email, github) {

        // Adds the class from before into this constructor
        super(id, name, email);

        // Adds the github option for the Engineer
        this.github = github;
    }

    // Returns the github name
    getGithub() {
        return this.github;
    }

   // ????????????????????
    getJobRole() {
        return "Engineer";
     }
  }

  module.exports = Engineer;