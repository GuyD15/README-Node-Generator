// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

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
