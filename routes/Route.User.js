const UserRoute = require('express').Router();

const CreateUser = require('../controllers/Controller.Insert');
const GetUser = require('../controllers/Controller.Get');

UserRoute.post('/user', CreateUser);
UserRoute.get('/user', GetUser);

module.exports = UserRoute;