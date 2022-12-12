class Employee {
  // This is the main parent class which all employees will have. An Id number, a name and an email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Returns the name
  getName() {
    return this.name;
  }
  // Returns the ID number
  getId() {
    return this.id;
  }

  // Returns the email
  getEmail() {
    return this.email;
  }

  // ????????????????????
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
