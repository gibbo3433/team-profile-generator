const Employee = require('./Employee');

class Intern extends Employee {

    constructor (id, name, email, school) {

        // Adds the class from before into this constructor
        super(id, name, email);

        // Adds the school option for the Intern
        this.school = school;
    }

    // Returns the school name
    getSchool() {
        return this.school;
    }

   // ????????????????????
    getRole() {
        return "Intern";
     }
  }

  module.exports = Intern;