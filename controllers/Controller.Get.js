const user = require('../models/Model.User')();
const albums = require('../models/Model.Albums')();
const photos = require('../models/Model.Photos')();

albums.hasMany(photos);

module.exports = async (req, res, next) => {
    const userData = await user.findByPk(req.query.id);

    const albumsData = await albums.findAll({
        where: {
            'userId': userData.id
        }, include: photos
    });
    res.json({ userData, albumsData })
}