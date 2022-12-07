// This makes sure we include the Engineer.js from the lib folder
const Engineer = require("../lib/Engineer");

// This function will test the Engineer.js file using the jest dependancy
describe("Engineer", () => {

  describe("Init", () => {

    it("Make sure the constructor works", () => {

      // These are test values for the consts to see if the test will work
      const name = "Jordan";
      const id = 555;
      const email = "jordan@gmail.com";
      const github = "@jordanGitHub"
      const role = "Engineer";

      // Pull the constructor from lib/Engineer and add in my test values above
      const final = new Engineer(name, id, email, github);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.name).toEqual(name);
      expect(final.id).toEqual(id);
      expect(final.email).toEqual(email);
      expect(final.github).toEqual(github);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.getName()).toEqual(name);
      expect(final.getID()).toEqual(id);
      expect(final.getEmail()).toEqual(email);
      expect(final.getGithub()).toEqual(github);
      expect(final.getRole()).toEqual(role);
    });
  });
});