// This makes sure we include the Employee.js from the lib folder
const Employee = require("../lib/Employee");

// This function will test the Employee.js file using the jest dependancy
describe("Employee", () => {

  describe("Init", () => {

    it("Make sure the constructor works", () => {

      // These are test values for the consts to see if the test will work
      const name = "Jordan";
      const id = 555;
      const email = "jordan@gmail.com";
      const role = "Employee";

      // Pull the constructor from lib/employee and add in my test values above
      const final = new Employee(name, id, email);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.name).toEqual(name);
      expect(final.id).toEqual(id);
      expect(final.email).toEqual(email);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.getName()).toEqual(name);
      expect(final.getId()).toEqual(id);
      expect(final.getEmail()).toEqual(email);
      expect(final.getRole()).toEqual(role);
    });
  });
});
