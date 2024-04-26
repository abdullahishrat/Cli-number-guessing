#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10+1);

const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
       type: "number",
        message: "pleace guess anumber between 1-10: ",
   },
]);
if (answer.userGuessednumber === randomNumber) {
    console.log("congtratulation! you guessed right number.");
} else{
    console.log("you guessed wrong number");
}


