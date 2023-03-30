const Post = require('../../models/post');

module.exports = {
    create
};

async function create(req, res) {
    const post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    post.comments.push(req.body);
    await post.save();
    console.log(post);
    res.json(post);
}
