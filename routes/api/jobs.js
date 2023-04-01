const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/search', ensureLoggedIn, jobsCtrl.search);

// POST /api/jobs/:id 
router.post('/:id', ensureLoggedIn, jobsCtrl.saveJob);

module.exports = router;