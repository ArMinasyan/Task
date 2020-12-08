const user = require('../models/Model.User')();


module.exports = async (req, res, next) => {
    user.destroy({
        where: {
            id: req.query.id
        }
    }).then(result => {
        if (result) res.status(200).json({ msg: 'Data deleted' });
        else res.status(200).json({ msg: 'There is error, try again' });
    })
}