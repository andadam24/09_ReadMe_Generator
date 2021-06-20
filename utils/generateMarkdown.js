// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else {
    return `("Please enter a valid license")`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Eclipse") {
    return `https://opensource.org/licenses/EPL-2.0`;
  } else {
    return `("Please enter a valid license)`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==="MIT") {
    return `This application is licensed by MIT`;
  } else if (license === "Mozilla") {
    return `This application is licensed by Mozilla`;
  } else if (license === "Apache") {
    return `This application is licensed by Apache`;
  } else if (license === "Eclipse") {
    return `This application is licensed by Apache`;
  } else {
    return `("Please enter a valid license)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents:
-[Description](#description) <br/>
-[Installation](#installation) <br/>
-[Usage](#usage) <br/>
-[License](#license) <br/>
-[Contribution](#contribution) <br/>
-[Tests](#tests) <br/>
-[Questions](#questions) <br/>

##Installations
${data.installation}

##Usage
${data.usage}

##Contribution
${data.contribution}

##Tests
${data.tests}

##Questions
${data.questions}

Check out my GitHub: [${data.username}](https://github.com/${data.username})
If you have any questions, please contact my email: ${data.email}

##License
${renderLicenseBadge(data.license)} <br/>
${renderLicenseLink(data.license)} <br/>
${renderLicenseSection(data.license)} <br/>



`;
}

module.exports = generateMarkdown;
