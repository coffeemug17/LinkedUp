const Job = require('../../models/job');
const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const YOUR_APP_ID = process.env.APP_ID;
const YOUR_APP_KEY = process.env.APP_KEY;

module.exports = {
    search
};

async function search(req, res) {
    const searchItem = req.query.searchItem;
    if (!searchItem) return null;
    const job = await Job.findOne({id: req.query.id});
    const url = `${BASE_URL}/1?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&results_per_page=20&what=${searchItem}&content-type=application/json`
    const response = await fetch(url);
    const searchData = await response.json()
    res.json(searchData.results);
} 