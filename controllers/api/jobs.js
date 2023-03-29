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
    const jobs = await Job.find({}, 'id');
    console.log(jobs, "this is line 15");
    const existingJobIds = new Set(jobs.map(job => job.id));

    // if (jobs !== []) {
    //     const results = jobs.map(({ 
    //         id, title, company, location, description, redirect_url, salary_max, salary_min }) => ({
    //         id, title, company, location, description, redirect_url, salary_max, salary_min
    //         }));
    //         return res.json(results)
    // }
    const url = `${BASE_URL}/1?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&results_per_page=5&what=${searchItem}&content-type=application/json`
    const response = await fetch(url);
    const searchData = await response.json()
    const jobsToCreate = searchData.results.filter(job => !existingJobIds.has(job.id)).map(job => {
        return {
            title: job.title,
            id: job.id,
            description: job.description,
            redirect_url: job.redirect_url,
            company: job.company.display_name,
            location: job.location.display_name,
            salary_max: job.salary_max,
            salary_min: job.salary_min
        }
    });
    if (jobsToCreate.length > 0) {
        await Job.insertMany(jobsToCreate);
    }
    console.log(jobsToCreate, "this is line 38");
    // const newJobsToCreate = jobsToCreate.filter(job => existingJobIds.has(job.id));
const results = await Job.find({'title': {$regex: searchItem, $options: 'i'}});
    res.json(results);
} 