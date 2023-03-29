const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    company: {type: String, required: true},
    salary_max: {type: Number, required: true},
    salary_min: {type: Number, required: true},
    id: {type: String, required: true},
    redirect_url: {type: String, required: true},
});

module.exports = mongoose.model('Job', jobSchema)