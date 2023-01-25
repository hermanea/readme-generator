// Uses generateMarkdown Javascript file, inquirer, and fs.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer used to ask questions and populate README sections.
inquirer.prompt ([
    {
        type:'input',
        name:'title',
        message:'Please enter the title of your project.',
    },
    {
        type:'input',
        name:'description',
        message:'Please write a brief description of your project.',
    },
    {
        type:'input',
        name:'install',
        message:'Please explain how to install your project.',
    },
    {
        type:'input',
        name:'usage',
        message:'Please explain how one should use your project.',
    },
    {
        type:'input',
        name:'contribution',
        message:'Please explain any contribution guidelines.',
    },
    {
        type:'input',
        name:'test',
        message:'Please explain any testing instructions.',
    },
    {
        type:'list',
        name:'license',
        message:'Please select the license your project utilizes.',
        choices: ['None','MIT','Apache 2.0','Mozilla Public','GNU General Public v3.0']
    },
    {
        type:'input',
        name:'github',
        message:'Please enter your github username.',
    },
    {
        type:'input',
        name:'email',
        message:'Please enter your email address.',
    },

])

// Creates the README using fs.writeFile.
.then((data) => {
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!'))    
});
