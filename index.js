#! /usr/bin/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourfull welcome message
console.log(chalk.bold.rgb(154, 284, 284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 164, 284)(`<<<=======>>> ${chalk.bold.hex(`#9999FF`)(`Welcome to  Atiya shah - Word - Counter App`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(154, 264, 284)(`\t\t <<<==============================>>>\n`));
// Prompt the user to enter a sentence 
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellow("Enter a Sentence")
    }
]);
// Trimming the sentence and splitting it into word based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("*".repeat(60));
console.log(chalk.bold.white("- Sentence Word: "));
console.log(words);
console.log(chalk.bold(`\n  - Word Count: ${chalk.bold.yellowBright(words.length)}`));
console.log((chalk.cyanBright(` \n\t+++++++Thanks For Using Atiya Shah-Word Counter+++++++\n`)));
console.log("*".repeat(64));
