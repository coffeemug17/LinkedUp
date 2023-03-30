const Post = require('../../models/post');
const User = require('../../models/user');

module.exports = {
    create
};

async function create(req, res) {
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
