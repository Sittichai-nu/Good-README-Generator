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
function generateReadMe (answers){
  return `
  ##Name:
${answers.name}
##Title
${answers.Title}
##Descriptiomn
${answers.Description}
##Table Of Content
${answers.TableOfContent}
##Installation
${answers.Installation}
##Usage
${answers.Usage}
##License
${answers.License}
##Contribuitng
${answers.Contributing}
##Test
${answers.Test}
##Profile
${answers.Profile}
##Email
${answers.Email}`

};

  
promptUser()
.then(function(answers) {
  const readme = generateReadMe(answers);

  return writeFileAsync("README.md", readmeFile);
})
.then(function() {
  console.log("Success!");
})
.catch(function(err) {
  console.log(err);
});