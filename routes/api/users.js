const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);

// POST /api/users/login
router.post('/login', usersCtrl.login);

//GET /api/users
router.get('/search', ensureLoggedIn, usersCtrl.search);

// POST /api/users/:id 
router.post('/:id', ensureLoggedIn, usersCtrl.follow);

//GET /api/users
router.get('/', ensureLoggedIn, usersCtrl.getFollowing);

module.exports = router;