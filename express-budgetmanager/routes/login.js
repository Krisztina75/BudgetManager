var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

// //Redirection in case of successful login:
// router.post('/', async (req, res, next) => {
//   const result = await db.get({
//     select: '*',
//     from: 'users',
//     where: { email: `${req.body.email}`, relation: 'and', password: `SHA1('${req.body.password}')` }
//   })
//   if (result.length === 1) {
//     const token = getToken();
//     res.cookie('uuid', token);
//     await userDb.setUserToken(result[0].userId, token);
//     return res.redirect('/products');
//   }
//   res.render('login', { title: 'Express' });
// });


// router.post('/', async(req, res, next) => {
//   const result = await db.readUsers({
    
//   })
// })

module.exports = router;
