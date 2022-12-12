const Employee = require('./Employee');

class Manager extends Employee {

    constructor (id, name, email, officenumber) {

        // Adds the class from before into this constructor
        super(id, name, email);

        // Adds the officenumber option for the Manager
        this.officenumber = officenumber;
    }

    // Returns the officenumber
    getofficenumber() {
        return this.officenumber;
    }

   // ????????????????????
    getRole() {
        return "Manager";
     }
  }

  module.exports = Manager;