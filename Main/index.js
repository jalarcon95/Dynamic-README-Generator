// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your project?',
        validate:titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'How would you describe this project and how it works?',
        validate:descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'install',
        message:'What are the steps required to install your project? Please provide instructions.',
        validate:installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please explain how to install your project!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'How would someone use this project? Please provide instructions and examples for use.',
        validate:usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please explain how to use your project!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'credits',
        message:'Who are the collaborators? Please include yourself and others with any links to github page and email',
        validate:creditsInput => {
            if(creditsInput) {
                return true;
            } else {
                console.log('Please complete credits section!');
                return false;
            }
        }
    },
    {
        type:'list',
        name:'license',
        message:'Which license will you use for your project? Choose n/a if no license is used',
        choices: ['n/a','mit','agpl','apache']
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();