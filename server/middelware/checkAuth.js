exports.isLoggedIn = (req, res, next) => {
    if(req.user) {
        next();
    } else {
        return res.status(404).send('acces denied')
    }
}