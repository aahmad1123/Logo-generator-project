const inquirer = require('inquirer')
const fs = require('fs')
const generateShapes = require("./lib/shapes")

const questions = [
    {
        type: "input",
        name: "letters",
        message: "Input up to 3 letters."
    },
    {
        type: "input",
        name: "text color",
        message: "Enter a color keyword or hexidecimal."

    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like?",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shape color",
        message: "Enter a color keyword or hexidecimal."
    }
];

function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data)
        fs.writeFile("logo.svg", generateShapes);
    })
    .then((console.log("Generate logo.svg")));
}

init();