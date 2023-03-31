const Post = require('../../models/post');

module.exports = {
    getAll,
    create,
    deletePost
};

async function getAll(req, res) {
    const posts = await Post.find({}).populate('user').populate('comments.user', 'name').exec();
    res.json(posts);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const post = await Post.create(req.body);
    res.json(post);
}

async function deletePost(req, res) {
    const post = await Post.findByIdAndDelete({_id: req.params.id, user: req.user._id});
    res.json(post);
}