// This makes sure we include the Intern.js from the lib folder
const Intern = require("../lib/Intern");

// This function will test the Intern.js file using the jest dependancy
describe("Intern", () => {

  describe("Init", () => {

    it("Make sure the constructor works", () => {

      // These are test values for the consts to see if the test will work
      const name = "Jordan";
      const id = 555;
      const email = "jordan@gmail.com";
      const school = "Coding School"
      const role = "Intern";

      // Pull the constructor from lib/Intern and add in my test values above
      const final = new Intern(name, id, email, school);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.name).toEqual(name);
      expect(final.id).toEqual(id);
      expect(final.email).toEqual(email);
      expect(final.school).toEqual(school);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.getName()).toEqual(name);
      expect(final.getID()).toEqual(id);
      expect(final.getEmail()).toEqual(email);
      expect(final.getSchool()).toEqual(school);
      expect(final.getRole()).toEqual(role);
    });
  });
});