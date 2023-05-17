//Function to create License Badge
var badge = ""
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    badge = `## License 
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (license === "ISC") {
    badge = `## License 
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  };
  if (license === "MIT") {
    badge = `## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (license === "Mozilla") {
    badge = `## License 
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  };
  if (license === "Perl") {
    badge = `## License 
[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  };
  if (license === "None") {
    badge = ""
  }
  return badge
}

//Function to display License in Table of Contents
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)
`} return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {

  console.log("generate markdown",data)

  let contents = `## Table of Contents
`
  if (data.installation !== "") {
    contents += `* [Installation](#installation)
`
  }; 
  if (data.usage !== "") {
    contents += `* [Usage](#usage)
`
  };
  if (data.contributing !== "") {
    contents += `* [Contributing](#contributing)
`
  };
  if (data.contact !== "") {
    contents += `* [Contact](#contact)
`
  };

  contents += `${renderLicenseLink(data.license)}`
  
  let markdown = 

`# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}
`
  markdown += contents; 

  if (data.installation !== "") {
    markdown += 
`## Installation
This are the steps requiered to install the project: 
${data.installation}
`
  }; 
  if (data.usage !== "") {
    markdown += 
`## Usage
This are the instructions for using the project:
${data.usage}
`
  };
  if (data.contributing) {
    markdown += 
`## Contributing
This is how you can contribute with the project:
${data.contributing}
`
  };
  if (data.contact !== "") {
    markdown +=
`## Contact
If you have any questions please contact at email: ${data.contact} GitHub: ${data.github}
`
  };

  return markdown;
}

module.exports = generateMarkdown;


