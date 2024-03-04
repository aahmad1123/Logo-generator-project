const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Triangle, Square} = require("./lib/shapes");


const questions = [
    {
        type: "input",
        name: "letters",
        message: "Input up to 3 letters."
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Enter a color keyword or hexidecimal."
    }
];

function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data)
        let logoShape;
        if(data.shape === "circle"){
            logoShape = new Circle(data.shapeColor)
        }
        else if (data.shape === "triangle"){
            logoShape = new Triangle(data.shapeColor) //add color
        } else {
            logoShape = new Square(data.shapeColor) // ''
        }
     
      
        let svgTag = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${logoShape.render()}

         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.letters}</text>

        </svg>
        `


        fs.writeFileSync("logo.svg", svgTag);

    })
    .then((console.log("Generate logo.svg")));
}

init();