var express = require('express');
var router = express.Router();
import db from './db';
import User from 'User';
router.get('/', function(req, res, next) {
res.send('respond with a resource');
});
89
router.get('/profile', function(req, res, next) {
console.log(req);
User.findById(req.user.id)
.then(user => { res.send({ user: user }) })
.catch(err => { res.send(err); });
});
module.exports = router;