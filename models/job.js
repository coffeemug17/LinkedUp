const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    company: {type: String, required: true},
    salary: {type: Number, required: true, min: 0},
    id: {type: String, required: true},
    redirect_url: {type: String, required: true},
});

module.exports = mongoose.model('Job', jobSchema)