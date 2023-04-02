const job = require('../../models/job');
const Post = require('../../models/post');

module.exports = {
    getAll,
    create,
    deletePost,
    addLike
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

async function addLike(req, res) {
    const post = await Post.findById(req.params.id);
    if (post.likes.includes(req.user._id)) {
        post.likes.remove(req.user._id)
    } else {
        post.likes.push(req.user._id);
    }
    console.log(post);
    await post.save();
    res.json(post);
}