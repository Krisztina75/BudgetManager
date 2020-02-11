const mariadb = require('mariadb');
// npm i mariadb

const pool = mariadb.createPool({
  user: 'root',
  password: 'root',
  database: 'budgetmanager',
  connectionLimit: 5,
});

module.exports = class DB {
  constructor() {
    pool.getConnection().then((conn) => {
      this.conn = conn;
    });
  }

  async readCosts() {
    const sql = `
    SELECT * FROM costs
    `;

    const result = await this.conn.query(sql);
    return result;
  }

  async readIncomes() {
    const sql = `
    SELECT * FROM incomes
    `;

    const result = await this.conn.query(sql);
    return result;
  }


  async allCostCategories() {
    const sql = `
    SELECT Category, SUM(Amount) as amountByCategory FROM costs
    GROUP BY Category
    `;

    const result = await this.conn.query(sql);
    return result;
  }

  async allIncomeCategories() {
    const sql = `
    SELECT Category, SUM(Amount) as amountByCategory FROM incomes
    GROUP BY Category
    `;

    const result = await this.conn.query(sql);
    return result;
  }

};
