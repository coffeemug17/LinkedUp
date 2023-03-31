const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/posts/:id/comments
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.createComment);

// DELETE /api/comments/:id
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.deleteComment);

module.exports = router;
