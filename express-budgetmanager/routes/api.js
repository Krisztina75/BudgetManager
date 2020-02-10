const express = require('express');

const router = express.Router();

const DB = require('./../modules/db');

const db = new DB();

/* GET api page. */
router.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to API page. Server works!' });
});

/* GET api/costs page. */
router.get('/costs', async (req, res, next) => {
  const costResults = {};

  costResults.allCostItem = await db.readCosts();
  costResults.categories = await db.allCostCategories();

  res.json(costResults);
});

/* GET api/incomes page. */
router.get('/incomes', async (req, res, next) => {
  const incomeResults = {};

  incomeResults.allIncomeItem = await db.readIncomes();
  incomeResults.categories = await db.allIncomeCategories();

  res.json(incomeResults);
});

module.exports = router;
