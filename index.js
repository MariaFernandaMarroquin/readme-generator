
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title:"
    }, 
    {
        type: "input",
        name: "description",
        message: "Enter the description of the project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation of the project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage of the project:",
    },
    {
        type: "list",
        message: "What type of license does the project has:",
        name: "license",
        choices: ["Apache 2.0", "ISC", "MIT", "Mozilla", "Perl", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How does other people can contribute to your project:",
    },
    {
        type: "input",
        name: "contact",
        message: "Enter your email",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username",
    }];

//Function to write README file
function writeToFile(data) {
    fs.writeFile("NewReadME.md", data, err => {
        err ? console.log(err) : console.log("Succesfully created ReadME!");
    }
)}

//Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const dataToWrite = generateMarkdown(data)
        console.log(dataToWrite)
        writeToFile(dataToWrite)
    });
}

// Function call to initialize app
init();




