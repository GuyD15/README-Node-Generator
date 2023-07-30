// TODO: Include packages needed for this application
// Importing packages for the application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// Created questions for the array based on the professional README.md given in pre-course
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
            {
                name: 'None',
                value: 'None',
            },
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
];

// TODO: Create a function to write README file
// writing a file with the fileName and data parameters. Also adding the error parameter so if the value is null it will log file generated, but if there is an error value it will log an error.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README.md file generated!'));
}

// TODO: Create a function to initialize app
// prompts for the questions and then are answered, markdown is where the answers are inserted and creates a document for them, which is writing the file 'README.md'. If there's an error in the process that is what the .catch is for, letting us know about it.
function init() {
    inquirer
    .prompt(questions)
    // .then is for promises that are kept.
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
    // .catch is for promises that are not kept and we catch the error.
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
