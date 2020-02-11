const express = require('express');
const router = express.Router();

const userDB = require('../modules/user');
const userdb = new userDB();

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

/*login*/
router.post('/', async (req, res, next) => {
  const result = await userdb.login(req.body);

  if (result.length === 1) {
    return res.redirect('/api');
  }
  res.render('login', { title: 'Login' });
});

module.exports = router;
