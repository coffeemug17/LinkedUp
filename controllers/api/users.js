const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  search,
  follow
};

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function search(req, res) {
  const searchUser = req.query.searchUser;
  if(!searchUser) return null;
  const users = await User.find({'name': {$regex: searchUser, $options: 'i'}});
  res.json(users);
}

async function follow(req, res) {
  const user = await User.findById(req.user._id);
    if (user.following.includes(req.params.id)) {
        user.following.remove(req.params.id)
    } else {
        user.following.push(req.params.id);
    }
    await user.save();
    res.json(user);
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}