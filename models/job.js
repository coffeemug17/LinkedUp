const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const jobSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    company: {type: String, required: true},
    salary_max: {type: Number, required: true},
    salary_min: {type: Number, required: true},
    location: {type: String, required: true},
    id: {type: String, required: true},
    redirect_url: {type: String, required: true},
    users: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }]
});

module.exports = mongoose.model('Job', jobSchema)