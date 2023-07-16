// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description of the project you are working on',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for how to use the program',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators for the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license was used for this project?',
        choices: [
            {
                name: 'MIT License',
                value: 'MIT',
            },
            {
                name: 'Apache License 2.0',
                value: 'Apache License',
            },
            {
                name: 'Boost Software License 1.0',
                value: 'Boost Software',
            },
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README.md file generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then((answers) => {
        const markdown = generateMarkedown(answers);
        writeToFile('README.md', markdown);
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
