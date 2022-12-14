# Team Profile Generator

# Challenge 10: 

## Creating a Team Profile Generator

### User Story

- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles

### Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

## Issues identified and corrected

- Making sure the jest files were working correctly

I could not remember how to add jest into the json. packages so needed to research how to. Also, at the start I got a few errors (syntax in this.id) but
managed to resolve it after checking my code.

- Creating the completed HTML file

I gave the wrong link for the readFileSync to find and thus, could not find the template to put my arrays into. Checking of my own code fixed this.

## Future work
  
- Add additional questions onto my inquirer so that more detail can be added into the users cards
- Add more CSS so that the page looks more appealing as a buisness

I have added  Javascript //notes to help any future edits by making it easier to see what the different elements are in the code so that if any collaboration work will be done in the future, it will be easiser to track and change.

## Video Demonstration

- Link to full video demonstration
https://drive.google.com/file/d/1KjevNN7KH9qvW0JX7FQfzDgU07-mX-OB/view

## Image of completed Team Profile Generator

![Screenshot 2022-12-14 001516](https://user-images.githubusercontent.com/113479774/207473057-76185c7b-c810-4f1f-a438-aa496befe6ee.jpg)

## Link to deployed application

N/A

## Authors and acknowledgment

Jordan Gibbs - Novice Coder

## License

N/A
