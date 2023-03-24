module.exports = function(req, res, next) {
    if (!req.user) return res.status(404).json('Unauthorized');
    next();
}