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
    displayDepartment,
} = require ('./department');

const {
    addRole,
    removeRole,
    updateRole,
    displayRole,
} = require ('./role');

//functionality
//add, remove, view and update the databases
async function app () {
    console.log('a');
    const answer = await inquirer.prompt( [
        {
            type: 'list',
            name: 'action',
            message: 'Select a choice',
            choices: [
                'Add Department to Employee',
                'Add Role to Employee',
                'Add Employee',
                'Remove Employee',

                'View Employees',
                'View Employee by Department',
                'View Employee by Manager',
                'View Employee by Role',

                'View Departments',
                'View Roles',
                'Add Department',
                'Remove Department',
                'Add Roll',
                'Remove Role',
                
                'Update Employee Manager',
                'Update Employee Department',
                'Update Employee Role',


                

            ]
        }
    ]);
}

init();