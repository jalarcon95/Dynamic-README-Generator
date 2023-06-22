// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Assets/generateMarkdown.js');

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
        type:'input',
        name:'test',
        message:'Is there any testing required for your project? If not, tyoe n/a.',
        validate:titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your response!');
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
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message:'README created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}


// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.mesage);
})
.catch(err => {
    console.log(err);
})