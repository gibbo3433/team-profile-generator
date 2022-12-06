class Employee {
    // This is the main parent class which all employees will have. An Id number, a name and an email
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Returns the ID number
    getId() {
        return this.id;
    } 

    // Returns the name
    getName() {
        return this.name;
    }

    // Returns the email
    getEmail() {
        return this.email;
    }

    // ????????????????????
    getJobRole() {
        return "Employee";
    }
}

module.exports = Employee