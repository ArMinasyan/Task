const UserRoute = require('express').Router();

const CreateUser = require('../controllers/Controller.Insert');

UserRoute.post('/user', CreateUser);

module.exports = UserRoute;