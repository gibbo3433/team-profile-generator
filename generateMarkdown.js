// This function will find the specific license badge and display it on the Readme file
function renderLicenseBadge(license) {
  if ( license !== "none" ) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)` 
  } 
  return ""
}

// This function will find the specific license link and display it next to the license shown in the Readme
function renderLicenseLink(license) {
  if ( license !== "none ") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  return ""
}

// This function will display in text what license has been used in the Readme
function renderLicenseSection(license) {
  if ( license !== "none ") {
    return ` This project is licensed under: ${license} `
  }
  return "" 
}

// This function generates a markdown for the ReadMe.md file in the assests folder
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

  ${renderLicenseSection(data.license)}

  Here is the license link for ${data.license} ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions you want to ask about this project, please contact ${data.username}(https://github.com/${data.username})</br>
  Or, you can send an email to ${data.email}

`;
}

module.exports = generateMarkdown;
