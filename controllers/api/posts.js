const Post = require('../../models/post');

module.exports = {
    getAll,
    create
};

async function getAll(req, res) {
    const posts = await Post.find({}).populate('user').exec();
    console.log(posts);
    res.json(posts);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const post = await Post.create(req.body);
    res.json(post);
}