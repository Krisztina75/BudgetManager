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
  // costResults.categories = await db.allCostCategories();
  res.json(costResults);
});

/* GET api/incomes page. */
router.get('/incomes', async (req, res, next) => {
  const result = await db.readIncomes();
  res.json(result);
});

module.exports = router;
