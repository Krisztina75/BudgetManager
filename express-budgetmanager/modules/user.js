const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'budgetmanager',
    connectionLimit: 5,
});

module.exports = class userDB {
    constructor() {
        pool.getConnection().then((conn) => {
            this.conn = conn;
        });
    }



}