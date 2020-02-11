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

    async login(user) {
        const sql = `
        SELECT * FROM users
        WHERE email = '${user.email}'
        AND password = SHA1('${user.password}')
        `;

        const result = await this.conn.query(sql);
        return result;
    }


}