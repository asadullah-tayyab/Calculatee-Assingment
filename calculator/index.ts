#! /usr/bin/env node
import inquirer from "inquirer";
   async function  askQuestion() {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "operators",
        messege: "which type of calculator you perform",
        choices: ["Addition", "Subtraction", "Multiplication", "Subtraction"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter your number 1",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter your number 2",
      },
    ]);
    if(answer.operators=="Addition"){
        console.log(`${answer.num1} +${answer.num2}=${answer.num1 + answer.num2}`);
    }
    else if(answer.operators=="Subtraction"){
        console.log(`${answer.num1} - ${answer.num2}=${answer.num1 - answer.num2}`);
    }
     else if(answer.operators=="Multiplication"){
        console.log(`${answer.num1} * ${answer.num2}=${answer.num1 * answer.num2}`);
    }
    else if(answer.operators=="Divion "){
        console.log(`${answer.num1} / ${answer.num2}=${answer.num1 / answer.num2}`);
    }


    }
    //A12asd43@
    async function startAgain() {
        let again;
        do{
            await askQuestion();
             again=await inquirer
            .prompt({
                type:"input",
                name:"restart",
                message:"Do you want to continute yes or cancel"

            })
        }
        while(again.restart==="yes")    
    }

    startAgain();