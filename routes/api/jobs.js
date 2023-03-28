const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/search', ensureLoggedIn, jobsCtrl.search);

module.exports = router;