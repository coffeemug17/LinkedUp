const Post = require('../../models/post');
const User = require('../../models/user');

module.exports = {
    createComment,
    deleteComment
};

async function createComment(req, res) {
    const user = await User.findById(req.user._id)
    const post = await 
        Post.findById(req.params.id).populate('comments.user');
    const comment =  post.comments.create({
        content: req.body.content,
        user: user,
    })
    post.comments.push(comment);
    await post.save();
    await post.populate('comments.user', 'name');
    console.log(post.comments[0].user.name);
    res.json(post);
}

async function deleteComment(req, res) {
    const post = await Post.findOne({'comments._id': req.params.id, 'comments.user': req.user._id})
    post.comments.remove(req.params.id);
    await post.save();
    res.json(post);
}