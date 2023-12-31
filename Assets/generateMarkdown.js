// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
 } 

// A function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
 }

// A function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
    
  The application is covered under the following license:
    
  ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
 }

function renderLicenseTOC(license) {
  if (license !=='no license') {
  return `
  * [License](#license)`;
  } else {
    return ' ';
  }
 }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#install)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing](#test)
  ${renderLicenseTOC(data.license)}

  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.install}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ## [Credits](#table-of-contents)

  ${data.credits}

  ## [Testing](#table-of-contents)

  ${data.test}

  ${renderLicenseSection(data.license)}
  
`;
}

module.exports = generateMarkdown;