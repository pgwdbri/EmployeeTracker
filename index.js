//test
//psuedocode
//create a databse of three tables
//db1 = ID + name
//db2 = ID + title + salary + department ID
//db3 = ID + first name + last name + manager ID

//functionality
//add, remove, view and update the databases

//packages to include

//inquirer
const inquirer = require('inquirer');
//a database/sql
const db = require('./database');

//nom package

//console.table


//setting up variables
const {
    addEmployee,
    removeEmployee,
    updateEmployee,
    addManager,
    removeManager,
    updateManager,
    displayEmployees,
    displayManagers,
    displayDepartment
} = require('./employee');

const {
    addDepartment,
    removeDepartment,
    updateDepartment,
    displayDepartment
} = require ('./department');

const {
    addRole,
    removeRole,
    updateRole,
    displayRole,
} = require ('./role');

async function app () {
    console.log('a');
    const answer = await inquirer.prompt( [
        {
            type: 'list',
            name: 'action',
            message: 'Select a choice',
            choices: [

            ]

        }


    ])
}