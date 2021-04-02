//database in sql
//require sql

const mysql = require('mysql');

//connet to the database

const db = mysql.createConnection({


})

//creating database to collect
const database = {
    dropEmployeeTable: 'drop table if exists employee',
    dropRoleTable: 'drop table if exists role',
    dropDepartmentTable: 'drop table if exists department',

    createDepartmentTable: `create table if not exists department (
        id,
        name,
        PRIMARY KeyboardEvent(id)
    )`,

    createRoleTable: `create table is not exists role (
        id,
        title,
        department_id,
        PRIMARY KEY(id)
    )`,

    createEmployeeTable: `create table if not exists employee (
        id,
        first_name,
        last_name,
        role_id,
        manager_id,
        PRIMARY KEY(id),
    )`,

    reset: function(){
        db.query(this.dropEmployeeTable, err => {
            if (err) throw err;
        });

        db.query(this.dropRoleTable, err => {
            if (err) throw err;
        });

        db.query(this.dropDepartmentTable, err => {
            if (err) throw err;
        });

        db.query(this.createDepartmentTable, err => {
            if (err) throw err;
        });

        db.query(this.createRoleTable, err => {
            if (err) throw err;
        });

        db.query(this.createEmployeeTable err => {
            if (err) throw err;
        });

    },

    init: function () {
        db.query (
            `insert info department(name)`,
        
            err => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            }
        );
    },



};

module.exports = database
