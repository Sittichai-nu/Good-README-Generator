const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "Title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "Description",
      message: "Project description"
    },
    {
      type: "input",
      name: "TableOfContent",
      message: "Write your Table Content"
    },
    {
      type: "input",
      name: "Installation",
      message: "Installation process"
    },
    {
      type: "input",
      name: "Usage",
      message: "Usage."
    },
    {
        type: "input",
        name: "Lincense",
        message: "What is your license."
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who is your Contributor?."
    },
    {
        type: "input",
        name: "Test",
        message: "test."
    },
    {
        type: "input",
        name: "Profile",
        message: "Github profile picture link."
    },
    {
        type: "input",
        name: "Email",
        message: "enter your emaile."
    }
]);
}
function generateReadMe(answers) {

      const queryURL = `https://api.github.com/users/${response.username}/even/public` 
    return `
  ${answers.name}
  ${answers.Title}
  ${answers.Description}
  ${answers.TableOfContent}
  ${answers.Installation}
  ${answers.Usage}
  ${answers.Lincse}
  ${answers.Contributing}
  ${answers.Test}
  ${answers.Prpfile}
  ${answers.Email}`
  };


  
  async function init() {
      console.log("hi")
      try {
        const answers = await promptUser();
    
        const readme = generateReadMe(answers);
    
        await writeFileAsync("README.md", readmeFile);
    
        console.log("Successfully generate README.md file");
      } catch(err) {
        console.log(err);
      }
    }
    
    init();