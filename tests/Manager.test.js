// This makes sure we include the Manager.js from the lib folder
const Manager = require("../lib/Manager");

// This function will test the Manager.js file using the jest dependancy
describe("Manager", () => {

  describe("Init", () => {

    it("Make sure the constructor works", () => {

      // These are test values for the consts to see if the test will work
      const name = "Jordan";
      const id = 555;
      const email = "jordan@gmail.com";
      const officenumber = 12345
      const role = "Manager";

      // Pull the constructor from lib/Manager and add in my test values above
      const final = new Manager(name, id, email, officenumber);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.name).toEqual(name);
      expect(final.id).toEqual(id);
      expect(final.email).toEqual(email);
      expect(final.officenumber).toEqual(officenumber);

      // This will check to see if the values in the 'final' matches what will come out

      expect(final.getName()).toEqual(name);
      expect(final.getId()).toEqual(id);
      expect(final.getEmail()).toEqual(email);
      expect(final.getofficenumber()).toEqual(officenumber);
      expect(final.getRole()).toEqual(role);
    });
  });
});