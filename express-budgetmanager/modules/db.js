const mariadb = require('mariadb');
// npm i mariadb

const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'budgetmanager',
    connectionLimit: 5,
});
