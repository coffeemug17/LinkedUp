const Post = require('../../models/post');

module.exports = {
    getAll,
    create
};

async function getAll(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}

async function create(req, res) {
    // console.log(req.user);
    req.body.user = req.user._id;
    console.log(req.body.user);
    const post = await Post.create(req.body);
    res.json(post);
}