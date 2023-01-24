// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt ([
    {
        type:'',
        name:'',
        message:'',
    },
    {
        type:'',
        name:'',
        message:'',
    },
    {
        type:'',
        name:'',
        message:'',
    },
    {
        type:'',
        name:'',
        message:'',
    },
    {
        type:'',
        name:'',
        message:'',
    },
    {
        type:'',
        name:'',
        message:'',
    },

])
.then(response => {
    console.log(response)
    fs.writeFile()
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
