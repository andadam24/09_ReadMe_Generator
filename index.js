// TODO: Include packages needed for this application
const inquirer= require ('inquirer');
const generateMarkdown = require ("./utils/generateMarkdown");
const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What would you like to name your readme?"

    },
    {
        type:"input",
        name:"description",
        message:"Describe your project"
    },
    {
        type:"input",
        name:"installation",
        message:"Please insert Installation Instructions"
    },
    {
        type:"input",
        name:"usage",
        message:"Please insert Usage Information"
    },
    {
        type:"list",
        name:"license",
        message:"Please select the appropriate license",
        choices:[
           "MIT",
           "Mozilla",
           "Apache",
           "Boost",
           "Eclipse",
    
        ]
    },
    {
        type:"input",
        name:"contribution",
        message:"Who contributed to this project?"
    },
    {
        type:"input",
        name:"tests",
        message:"Please insert Test Instructions"
    },
    {
        type:"input",
        name:"questions",
        message:"Do you have any Questions?"
    },
    {
        type:"input",
        name:"username",
        message:"Please provide your Github Username"
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your email for any questions"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        let data = generateMarkdown(answers)
        writeToFile("Readme.md", data)

        })

}

// Function call to initialize app
init();
