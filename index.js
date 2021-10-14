
const fs = require("fs");
const inquirer = require("inquirer");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const teamPage = require("./src/teamHTML");

const memberArray = [];

// Manager Questions
const managerQuestion = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the team manager's office number?"
    },
];

// Run Manager Question and push answer to array
async function init() {
    try {
        const data = await inquirer.prompt(managerQuestion);
        const team = new manager(data.id, data.employeeName, data.email, data.officeNum);
        memberArray.push(team);
        addMember();           
        }
    catch (error){
        console.log(error);
        console.log("Uh Oh");
    }
}

   
init();


// Add team member question and push final array to generate html
const addMember = () => {
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'teamMember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
        },
    ])
    .then(({teamMember}) => {
        if (teamMember == "Engineer") {
            engineerQuestion();
        }
        if (teamMember == "Intern") {
            internQuestion();
        }
        if (teamMember == "I don't want to add any more team members") {
            
            const teamCards = teamPage(memberArray);
            console.log(memberArray);
            return writeToFile(('./dist/teamPage.html'), teamCards);
        }
    });
};

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("File written successfully");
        });
};


// Engineer Questions and push answer to array
const engineerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the Engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's GitHub username?"
        },
    ])
    .then(({id, employeeName, email, github}) => {
        const teamMember = new engineer(id, employeeName, email, github);
        memberArray.push(teamMember);
        addMember();
    });
};

// Intern Questions and push answer to array
const internQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the Intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Intern's School name?"
        },
    ])
    .then(({id, employeeName, email, school}) => {
        const teamMember = new intern(id, employeeName, email, school);
        memberArray.push(teamMember);
        addMember();
    });
};



    




