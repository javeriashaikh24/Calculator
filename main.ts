#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a Wellcome Message 
console.log ("\n\tWellcome To \`Codewithiqra\` - CLI simple Calculator\n");

// Asking Question from users through Inquirer

let answers = await inquirer.prompt([
{message: "Enter First Number", type: "number", name: "FirstNumber"},
{message: "Enter Second NUMBER", type: "number", name: "SecondNumber"},
{
    message: "Select one operator to perform Operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction","Division", "Multiplication"]
},
]);

// conditional statement If-Else
if(answers.operator === "Addition"){
    console.log (answers.FirstNumber + answers.SecondNumber)

}
else if (answers.operator === "Subtraction"){
    console.log (answers.FirstNumber - answers.SecondNumber)
}
else if (answers.operator === "Division"){
    console.log (answers.FirstNumber / answers.SecondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log (answers.FirstNumber * answers.SecondNumber)
}
else { 
    console.log ("INVALID INPUT")
}