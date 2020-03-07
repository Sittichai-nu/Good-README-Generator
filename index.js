const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");


inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Project description"
    },
    {
        type: "input",
        name: "tableOfContent",
        message: "Write your Table Content"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation process"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage."
    },
    {
        type: "input",
        name: "lincense",
        message: "What is your license."
    },
    {
        type: "input",
        name: "contributing",
        message: "Who is your Contributor?."
    },
    {
        type: "input",
        name: "test",
        message: "test."
    },
    {
        type: "input",
        name: "userName",
        message: "Github Username?"
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
]).then(function (response) {
    console.log(response.userName);
    axios.get(`https://api.github.com/users/${response.userName}`).then(function (res) {
        console.log(res.data);
        var avatarImg = res.data.avatar_url;

        fs.writeFile("README.md",`![](${avatarImg})
      \n  Name:  ${response.name}  
        title:  ${response.title}  
        Description:  ${response.description}  
        Table of Content:  ${response.tableOfContent}  
        Installation:  ${response.installation}  
        Usage:  ${response.usage}  
        Lincse:  ${response.lincse}  
        Contributin:  ${response.contributing}  
        Test:  ${response.test}  
        Profile:  ${response.profile}  
        Email:  ${response.email}`, function (err) {

            if (err) {
               return console.log(err);
            }
            console.log("Successfully wrote README File!");

        });
    }, err => {
        console.log(err);
    });
});

