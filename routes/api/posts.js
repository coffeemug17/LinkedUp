const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/posts
router.get('/', postsCtrl.getAll);

//POST /api/posts
router.post('/', ensureLoggedIn ,postsCtrl.create);

module.exports = router