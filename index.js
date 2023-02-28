// array of questions for user
const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project:",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
    ("README.md", generateMarkdown.generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("README page has generated.")    
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(userInfo) {
        // userInfo is an object

        const markdownString = generateMarkdown(userInfo)
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('generated README')
            }
        })
    },
    // make the questions in the questions array
     
     e => {
        console.log(`The file could not be generated because the user does not exist.`);
    })
};

// function call to initialize program
init();
