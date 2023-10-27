import { Command } from "commander";
const program = new Command();


program.option('-n, --name <name>', "Your name ");

program.parse();

const options = program.opts();

console.log("Hello ", options.name + '!!')